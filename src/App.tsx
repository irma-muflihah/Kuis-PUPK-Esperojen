/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { QuizMode, UserAnswerRecord, DisplayView } from './types/quiz';
import { QUESTIONS } from './data/questions';
import { Navbar } from './components/Navbar';
import { PracticeMode } from './components/PracticeMode';
import { PosMode } from './components/PosMode';
import { ExamMode } from './components/ExamMode';
import { MistakesReview } from './components/MistakesReview';
import { PocketGuide } from './components/PocketGuide';
import { 
  Trophy, 
  CheckCircle, 
  Target, 
  AlertCircle, 
  Compass, 
  BookOpen, 
  Award,
  Layers,
  Maximize,
  Minimize,
  Tv,
  Users
} from 'lucide-react';

const STORAGE_ANSWERS_KEY = 'galang_tangguh_2026_answers';
const STORAGE_BOOKMARKS_KEY = 'galang_tangguh_2026_bookmarks';
const STORAGE_SOUND_KEY = 'galang_tangguh_2026_sound';
const STORAGE_VIEW_KEY = 'galang_tangguh_2026_display_view';

export default function App() {
  const [currentMode, setCurrentMode] = useState<QuizMode>('practice');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [displayView, setDisplayView] = useState<DisplayView>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_VIEW_KEY);
      return stored === 'ifp' ? 'ifp' : 'standard';
    } catch {
      return 'standard';
    }
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_SOUND_KEY);
      return stored !== null ? JSON.parse(stored) : true;
    } catch {
      return true;
    }
  });

  const [savedAnswers, setSavedAnswers] = useState<Record<string, UserAnswerRecord>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_ANSWERS_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_BOOKMARKS_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Keep fullscreen state in sync with browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as unknown as {
        fullscreenElement?: Element;
        webkitFullscreenElement?: Element;
      };
      setIsFullscreen(Boolean(doc.fullscreenElement || doc.webkitFullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleToggleFullscreen = useCallback(async () => {
    try {
      const doc = document as unknown as {
        fullscreenElement?: Element;
        webkitFullscreenElement?: Element;
        exitFullscreen?: () => Promise<void>;
        webkitExitFullscreen?: () => Promise<void>;
      };
      const docEl = document.documentElement as unknown as {
        requestFullscreen?: () => Promise<void>;
        webkitRequestFullscreen?: () => Promise<void>;
      };

      if (!doc.fullscreenElement && !doc.webkitFullscreenElement) {
        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
          await docEl.webkitRequestFullscreen();
        }
      } else {
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen toggle failed', err);
    }
  }, []);

  const handleToggleDisplayView = () => {
    setDisplayView(prev => {
      const next = prev === 'standard' ? 'ifp' : 'standard';
      try {
        localStorage.setItem(STORAGE_VIEW_KEY, next);
      } catch (e) {
        console.warn(e);
      }
      return next;
    });
  };

  // Persist answers
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ANSWERS_KEY, JSON.stringify(savedAnswers));
    } catch (e) {
      console.warn('Failed to save answers to localStorage', e);
    }
  }, [savedAnswers]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarkedIds)));
    } catch (e) {
      console.warn('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarkedIds]);

  // Persist sound setting
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SOUND_KEY, JSON.stringify(soundEnabled));
    } catch (e) {
      console.warn('Failed to save sound preference', e);
    }
  }, [soundEnabled]);

  const handleRecordAnswer = (record: UserAnswerRecord) => {
    setSavedAnswers(prev => ({
      ...prev,
      [record.questionId]: record,
    }));
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleToggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  const handleResetStats = () => {
    if (window.confirm('Apakah Anda yakin ingin mereset seluruh riwayat latihan dan skor?')) {
      setSavedAnswers({});
      setBookmarkedIds(new Set());
      localStorage.removeItem(STORAGE_ANSWERS_KEY);
      localStorage.removeItem(STORAGE_BOOKMARKS_KEY);
    }
  };

  const handleClearMistakes = () => {
    if (window.confirm('Reset daftar soal salah?')) {
      setSavedAnswers(prev => {
        const next: Record<string, UserAnswerRecord> = {};
        Object.entries(prev).forEach(([qId, rec]) => {
          if (rec.isCorrect) next[qId] = rec;
        });
        return next;
      });
    }
  };

  // Metrics summary
  const stats = useMemo(() => {
    const totalQuestions = QUESTIONS.length;
    let answeredCount = 0;
    let correctCount = 0;
    let wrongCount = 0;

    QUESTIONS.forEach(q => {
      const rec = savedAnswers[q.id];
      if (rec) {
        answeredCount++;
        if (rec.isCorrect) correctCount++;
        else wrongCount++;
      }
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    return { totalQuestions, answeredCount, correctCount, wrongCount, accuracy };
  }, [savedAnswers]);

  const isQuizMode = currentMode !== 'guide';

  return (
    <div className={`h-[100dvh] max-h-[100dvh] w-screen overflow-hidden bg-[#faf8f5] text-[#27211d] flex flex-col font-['Plus_Jakarta_Sans'] ${
      displayView === 'ifp' ? 'ifp-mode' : ''
    }`}>
      
      {/* Top Bar Navigation (Fixed height ~56px) */}
      <Navbar
        currentMode={currentMode}
        onSelectMode={setCurrentMode}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        mistakesCount={stats.wrongCount}
        onResetStats={handleResetStats}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        displayView={displayView}
        onToggleDisplayView={handleToggleDisplayView}
      />

      {/* Slim Status Strip in Quiz Mode (Takes only 28px, strictly 1-line) */}
      {isQuizMode && (
        <div className="flex-none h-7 bg-[#ede5db] border-b border-[#ddd3c6] px-3 sm:px-6 flex items-center justify-between text-[11px] text-stone-600 font-medium">
          <div className="flex items-center gap-2 truncate">
            <span className="font-bold text-amber-900">Galang Tangguh 2026</span>
            <span aria-hidden="true" className="text-stone-300 hidden sm:inline">·</span>
            <span className="hidden sm:inline">Kwarran Kemranjen Banyumas</span>
          </div>

          <div className="flex items-center gap-3 font-mono shrink-0">
            <span>Terjawab: <strong className="text-amber-900">{stats.answeredCount}/{stats.totalQuestions}</strong></span>
            <span className="text-stone-300">·</span>
            <span>Akurasi: <strong className={stats.accuracy >= 75 ? 'text-emerald-700' : 'text-stone-800'}>{stats.accuracy}%</strong></span>
            {stats.wrongCount > 0 && (
              <>
                <span className="text-stone-300">·</span>
                <button
                  onClick={() => setCurrentMode('mistakes')}
                  className="text-rose-700 font-bold hover:underline"
                >
                  {stats.wrongCount} Salah
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Extended Hero Banner ONLY on Guide Mode */}
      {!isQuizMode && (
        <section className="flex-none bg-[#f2ece4] border-b border-[#e5dcd1] py-3 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] text-stone-600 font-medium">
                SKU Penggalang Ramu · PUPK Kemranjen Banyumas 2026
              </div>
              <h1 className="text-base sm:text-lg font-bold text-[#321e17] font-['Outfit']">
                Buku Saku & Ringkasan Materi Lomba
              </h1>
            </div>
          </div>
        </section>
      )}

      {/* Main Viewport Container */}
      <main className={`flex-1 min-h-0 w-full ${
        isQuizMode ? 'overflow-hidden flex flex-col' : 'overflow-y-auto'
      }`}>
        {currentMode === 'practice' && (
          <PracticeMode
            questions={QUESTIONS}
            soundEnabled={soundEnabled}
            savedAnswers={savedAnswers}
            onRecordAnswer={handleRecordAnswer}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            displayView={displayView}
          />
        )}

        {currentMode === 'pos' && (
          <PosMode
            questions={QUESTIONS}
            soundEnabled={soundEnabled}
            savedAnswers={savedAnswers}
            onRecordAnswer={handleRecordAnswer}
          />
        )}

        {currentMode === 'tryout' && (
          <ExamMode
            questions={QUESTIONS}
            soundEnabled={soundEnabled}
            onRecordAnswer={handleRecordAnswer}
            onGoToMistakes={() => setCurrentMode('mistakes')}
          />
        )}

        {currentMode === 'mistakes' && (
          <MistakesReview
            questions={QUESTIONS}
            savedAnswers={savedAnswers}
            soundEnabled={soundEnabled}
            onRecordAnswer={handleRecordAnswer}
            onClearMistakes={handleClearMistakes}
            onGoToPractice={() => setCurrentMode('practice')}
          />
        )}

        {currentMode === 'guide' && <PocketGuide />}
      </main>

      {/* Footer ONLY visible in Guide mode */}
      {!isQuizMode && (
        <footer className="flex-none bg-[#261711] text-[#d6c7be] text-xs py-3 border-t border-[#3e271e]">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="text-[11px] text-stone-400">
              Kuis Galang Tangguh 2026 · Kwarran Kemranjen Kwarcab Banyumas
            </div>
            <div className="text-[11px] text-amber-200/80">
              Satyaku Kudarmakan, Darmaku Kubaktikan
            </div>
          </div>
        </footer>
      )}

    </div>
  );
}
