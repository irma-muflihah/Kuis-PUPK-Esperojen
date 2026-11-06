import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  Shuffle, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  BookOpen, 
  LayoutGrid,
  Filter,
  X,
  HelpCircle
} from 'lucide-react';
import { Question, CategoryId, UserAnswerRecord, DisplayView } from '../types/quiz';
import { CATEGORIES, shuffleQuestionOptions } from '../data/questions';
import { playSound } from '../utils/audio';

interface PracticeModeProps {
  questions: Question[];
  soundEnabled: boolean;
  onRecordAnswer: (record: UserAnswerRecord) => void;
  savedAnswers: Record<string, UserAnswerRecord>;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
  displayView?: DisplayView;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({
  questions,
  soundEnabled,
  onRecordAnswer,
  savedAnswers,
  bookmarkedIds,
  onToggleBookmark,
  displayView = 'standard',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [showGridModal, setShowGridModal] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);

  // Filter questions by category & dynamically shuffle options if requested
  const filteredQuestions = useMemo(() => {
    let list = selectedCategory === 'all' 
      ? [...questions]
      : questions.filter(q => q.category === selectedCategory);
    
    if (isShuffled) {
      list = [...list]
        .sort(() => 0.5 - Math.random())
        .map(q => shuffleQuestionOptions(q));
    }
    return list;
  }, [questions, selectedCategory, isShuffled]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, isShuffled]);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const currentRecord = currentQ ? savedAnswers[currentQ.id] : undefined;
  const isAnswered = currentRecord !== undefined;

  const handleSelectOption = useCallback((optionIndex: number) => {
    if (!currentQ || isAnswered) return;

    const isCorrect = optionIndex === currentQ.correctIndex;
    if (isCorrect) {
      playSound('correct', soundEnabled);
      setCurrentStreak(prev => {
        const next = prev + 1;
        if (next % 5 === 0) playSound('streak', soundEnabled);
        return next;
      });
    } else {
      playSound('wrong', soundEnabled);
      setCurrentStreak(0);
    }

    onRecordAnswer({
      questionId: currentQ.id,
      selectedIndex: optionIndex,
      isCorrect,
      timestamp: Date.now(),
    });
  }, [currentQ, isAnswered, soundEnabled, onRecordAnswer]);

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      playSound('click', soundEnabled);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      playSound('click', soundEnabled);
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (!isAnswered && currentQ) {
        if (e.key === '1' || e.key.toLowerCase() === 'a') handleSelectOption(0);
        else if (e.key === '2' || e.key.toLowerCase() === 'b') handleSelectOption(1);
        else if (e.key === '3' || e.key.toLowerCase() === 'c') handleSelectOption(2);
        else if (e.key === '4' || e.key.toLowerCase() === 'd') handleSelectOption(3);
      }

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex < filteredQuestions.length - 1) handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, currentQ, currentIndex, filteredQuestions.length, handleSelectOption]);

  const optionLetters = ['A', 'B', 'C', 'D'];

  if (!currentQ) {
    return (
      <div className="h-full flex items-center justify-center text-stone-500 text-sm">
        Tidak ada soal untuk kategori ini.
      </div>
    );
  }

  const isBookmarked = bookmarkedIds.has(currentQ.id);

  return (
    <div className={`h-full w-full max-w-7xl mx-auto flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden select-none ${
      displayView === 'ifp' ? 'ifp-mode' : ''
    }`}>
      
      {/* 1. TOP UTILITY BAR (Very compact, strictly 1 row) */}
      <div className="flex-none flex items-center justify-between gap-2 bg-white/90 border border-stone-200/80 rounded-xl px-3 py-1.5 shadow-2xs mb-2">
        
        {/* Category selector */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
          <Filter className="w-3.5 h-3.5 text-amber-600 shrink-0 hidden sm:block" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as CategoryId | 'all')}
            className="text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg px-2.5 py-1 border-none focus:outline-amber-600 cursor-pointer shrink-0"
          >
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>

          <span className="text-stone-300 hidden sm:inline">·</span>

          <span className="text-xs font-semibold text-stone-700 whitespace-nowrap shrink-0">
            Soal <span className="font-bold text-amber-700 font-mono text-sm">{currentIndex + 1}</span> / {filteredQuestions.length}
          </span>

          {currentStreak >= 2 && (
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{currentStreak} Beruntun</span>
            </span>
          )}
        </div>

        {/* Action icons (Grid modal, Shuffle, Bookmark) */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsShuffled(!isShuffled)}
            title={isShuffled ? 'Mode Acak: Urutan & Opsi Jawaban Diacak (Klik untuk Standar)' : 'Klik untuk Acak Urutan Soal & Pilihan Jawaban (A-D)'}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-xs font-medium transition-colors ${
              isShuffled
                ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border-stone-200'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">{isShuffled ? 'Diacak' : 'Acak'}</span>
          </button>

          <button
            onClick={() => setShowGridModal(true)}
            title="Buka Kisi Nomor Soal"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 transition-colors"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden sm:inline">Kisi No</span>
          </button>

          <button
            onClick={() => onToggleBookmark(currentQ.id)}
            title={isBookmarked ? 'Hapus Tanda' : 'Tandai Soal Ini'}
            className={`p-1.5 rounded-lg border text-xs font-medium transition-colors ${
              isBookmarked
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border-stone-200'
            }`}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            ) : (
              <Bookmark className="w-3.5 h-3.5 text-stone-400" />
            )}
          </button>
        </div>

      </div>

      {/* 2. SYMMETRICAL MAIN QUESTION & OPTIONS VIEWPORT (Single-screen, zero scroll) */}
      <div className="flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6 items-stretch justify-between overflow-hidden">
        
        {/* === LEFT CARD: Question Statement & Instant Explanation === */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between overflow-hidden">
          
          {/* Top Metadata */}
          <div>
            <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-2 mb-2 sm:mb-3">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-amber-800">{currentQ.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{currentQ.difficulty}</span>
                {currentQ.posNumber && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-stone-700">Pos {currentQ.posNumber}</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-1 text-[11px] text-stone-400">
                <BookOpen className="w-3 h-3 text-amber-700" />
                <span className="truncate max-w-[150px] sm:max-w-none">{currentQ.sourceDoc}</span>
              </div>
            </div>

            {/* Question Statement Text */}
            <h2 className={`font-bold text-stone-900 leading-snug font-['Outfit'] ${
              displayView === 'ifp' 
                ? 'text-lg sm:text-2xl lg:text-3xl' 
                : 'text-sm sm:text-lg lg:text-xl'
            }`}>
              {currentQ.question}
            </h2>
          </div>

          {/* Bottom Half of Left Column: Instant Explanation Box (or initial guidance) */}
          <div className="mt-2 sm:mt-4 pt-2 border-t border-stone-100 flex-1 min-h-0 flex flex-col justify-end">
            {isAnswered ? (
              <div className={`rounded-xl border p-3 sm:p-4 overflow-y-auto max-h-40 sm:max-h-56 scrollbar-none transition-all ${
                currentRecord.isCorrect 
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950' 
                  : 'bg-amber-50/90 border-amber-300 text-stone-900'
              }`}>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm mb-1">
                  {currentRecord.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                      <span className="text-emerald-900">Jawaban Anda Tepat!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 shrink-0" />
                      <span className="text-stone-950">
                        Kunci Jawaban: <strong className="text-emerald-700 font-mono">[{optionLetters[currentQ.correctIndex]}]</strong>
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed pl-5 sm:pl-7">
                  {currentQ.explanation}
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-stone-200 bg-stone-50/70 p-3 sm:p-4 text-xs text-stone-500 flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
                <span>
                  Pilih salah satu jawaban (A, B, C, D). Jawaban yang benar dan ulasan materi resmi langsung ditampilkan seketika.
                </span>
              </div>
            )}
          </div>

        </div>

        {/* === RIGHT CARD: Symmetrical Options A, B, C, D === */}
        <div className="bg-white border border-stone-200 rounded-2xl p-3 sm:p-6 shadow-xs flex flex-col justify-between gap-2 sm:gap-2.5 overflow-hidden">
          
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-0.5 sm:mb-1 flex items-center justify-between">
            <span>Pilihan Jawaban:</span>
            <span className="hidden sm:inline text-stone-400 font-normal">Tekan A/B/C/D</span>
          </div>

          {/* 4 Uniform Options */}
          <div className="flex-1 min-h-0 flex flex-col justify-between gap-2 sm:gap-2.5">
            {currentQ.options.map((optText, optIdx) => {
              const isUserPick = currentRecord?.selectedIndex === optIdx;
              const isCorrectAnswer = currentQ.correctIndex === optIdx;

              let optionStyle = 'border-stone-200 bg-stone-50/70 hover:bg-stone-100 text-stone-800';
              let badgeStyle = 'bg-stone-200 text-stone-700';

              if (isAnswered) {
                if (isCorrectAnswer) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500 shadow-2xs';
                  badgeStyle = 'bg-emerald-600 text-white font-bold';
                } else if (isUserPick && !isCorrectAnswer) {
                  optionStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400 shadow-2xs';
                  badgeStyle = 'bg-rose-600 text-white font-bold';
                } else {
                  optionStyle = 'border-stone-200 bg-stone-50/30 text-stone-400 opacity-60';
                  badgeStyle = 'bg-stone-100 text-stone-400';
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full flex-1 min-h-[44px] sm:min-h-[56px] text-left rounded-xl border transition-all flex items-center gap-3 px-3 sm:px-4 py-1.5 sm:py-2.5 relative group ${optionStyle} ${
                    !isAnswered ? 'cursor-pointer hover:border-amber-400 active:scale-[0.99]' : 'cursor-default'
                  }`}
                >
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${badgeStyle}`}>
                    {optionLetters[optIdx]}
                  </span>

                  <div className={`flex-1 leading-snug line-clamp-3 sm:line-clamp-2 ${
                    displayView === 'ifp' ? 'text-sm sm:text-base lg:text-lg font-medium' : 'text-xs sm:text-sm'
                  }`}>
                    {optText}
                  </div>

                  {isAnswered && (
                    <div className="shrink-0 pl-1">
                      {isCorrectAnswer ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-in zoom-in-50 duration-200" />
                      ) : isUserPick ? (
                        <XCircle className="w-5 h-5 text-rose-500 animate-in zoom-in-50 duration-200" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* 3. SYMMETRICAL BOTTOM CONTROLS (Always visible in 1 page) */}
      <div className="flex-none bg-white border border-stone-200 rounded-xl px-4 py-2 mt-2 shadow-2xs flex items-center justify-between gap-3">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-all ${
            currentIndex > 0
              ? 'border-stone-300 bg-white hover:bg-stone-100 text-stone-800 active:scale-95'
              : 'border-stone-200 bg-stone-50 text-stone-300 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        {/* Center Progress Pill */}
        <div className="text-xs font-semibold text-stone-600 flex items-center gap-2">
          <span className="font-mono font-bold text-stone-900 text-sm">
            {currentIndex + 1}
          </span>
          <span className="text-stone-300">/</span>
          <span className="font-mono text-stone-500">
            {filteredQuestions.length}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === filteredQuestions.length - 1}
          className={`flex items-center gap-1.5 px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-all ${
            currentIndex < filteredQuestions.length - 1
              ? 'bg-[#3E2723] hover:bg-[#2c1a17] text-white cursor-pointer active:scale-95'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
          }`}
        >
          <span>Berikutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

      {/* 4. MODAL GRID DRAWER (Zero layout displacement) */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 shadow-xl border border-stone-200 space-y-4">
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm font-['Outfit']">
                <LayoutGrid className="w-4 h-4 text-amber-700" />
                <span>Pilih Nomor Soal ({filteredQuestions.length})</span>
              </div>
              <button
                onClick={() => setShowGridModal(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-600">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Benar
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Salah
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-300" /> Belum
              </span>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-60 overflow-y-auto p-1">
              {filteredQuestions.map((q, idx) => {
                const rec = savedAnswers[q.id];
                let colorClass = 'bg-white border-stone-200 text-stone-700 hover:border-amber-400';
                if (rec) {
                  colorClass = rec.isCorrect 
                    ? 'bg-emerald-100 border-emerald-400 text-emerald-800 font-bold' 
                    : 'bg-rose-100 border-rose-400 text-rose-800 font-bold';
                }
                if (idx === currentIndex) {
                  colorClass += ' ring-2 ring-amber-500 ring-offset-1 font-bold';
                }
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowGridModal(false);
                    }}
                    className={`py-2 text-xs rounded-lg border transition-all ${colorClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
