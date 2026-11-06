import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { playSound } from '../utils/audio';

interface MistakesReviewProps {
  questions: Question[];
  savedAnswers: Record<string, UserAnswerRecord>;
  soundEnabled: boolean;
  onRecordAnswer: (record: UserAnswerRecord) => void;
  onClearMistakes: () => void;
  onGoToPractice: () => void;
}

export const MistakesReview: React.FC<MistakesReviewProps> = ({
  questions,
  savedAnswers,
  soundEnabled,
  onRecordAnswer,
  onClearMistakes,
  onGoToPractice,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter only questions where user's latest recorded answer was incorrect
  const wrongQuestions = questions.filter(q => {
    const rec = savedAnswers[q.id];
    return rec && !rec.isCorrect;
  });

  const currentQ = wrongQuestions[currentIndex] || wrongQuestions[0];
  const optionLetters = ['A', 'B', 'C', 'D'];
  const [selectedInSession, setSelectedInSession] = useState<number | null>(null);

  const handleSelectOption = (idx: number) => {
    if (!currentQ || selectedInSession !== null) return;
    setSelectedInSession(idx);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      playSound('correct', soundEnabled);
      // Update record to correct!
      onRecordAnswer({
        questionId: currentQ.id,
        selectedIndex: idx,
        isCorrect: true,
        timestamp: Date.now(),
      });
    } else {
      playSound('wrong', soundEnabled);
    }
  };

  const handleNext = () => {
    setSelectedInSession(null);
    if (currentIndex < wrongQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setSelectedInSession(null);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  if (wrongQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 font-['Outfit']">
          Hebat! Tidak Ada Soal yang Salah
        </h2>
        <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Semua soal yang pernah Anda kerjakan telah dijawab dengan benar, atau Anda belum pernah mengerjakan soal kuis.
        </p>
        <button
          onClick={onGoToPractice}
          className="px-6 py-2.5 bg-[#3E2723] hover:bg-[#2b1b18] text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
        >
          Lanjut Latihan Soal Baru
        </button>
      </div>
    );
  }

  const isAnsweredNow = selectedInSession !== null;

  return (
    <div className="h-full w-full max-w-7xl mx-auto flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden select-none">
      
      {/* Header Banner (Compact single line) */}
      <div className="flex-none flex items-center justify-between gap-2 bg-rose-50 border border-rose-200 rounded-xl px-3 py-1.5 shadow-2xs mb-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span className="text-xs font-bold text-rose-950">
            Klinik Soal Salah: <strong className="font-mono">{currentIndex + 1}</strong> / {wrongQuestions.length}
          </span>
          <span className="text-rose-300">·</span>
          <span className="text-xs text-rose-800 hidden sm:inline">
            Jawab benar untuk menuntaskan soal
          </span>
        </div>

        <button
          onClick={onClearMistakes}
          className="text-xs font-bold text-rose-700 hover:text-rose-900 bg-white/80 hover:bg-white px-2 py-0.5 rounded border border-rose-300 transition-colors"
        >
          Reset Daftar
        </button>
      </div>

      {/* Symmetrical Main Card Viewport */}
      <div className="flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6 items-stretch justify-between overflow-hidden">
        
        {/* LEFT: Question and Explanation */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-2 mb-2 sm:mb-3">
              <span className="font-bold text-amber-800">{currentQ.categoryLabel}</span>
              <span>Tingkat: {currentQ.difficulty}</span>
            </div>

            <h2 className="font-bold text-stone-900 leading-snug font-['Outfit'] text-sm sm:text-lg lg:text-xl">
              {currentQ.question}
            </h2>
          </div>

          {/* Instant explanation */}
          <div className="mt-2 sm:mt-4 pt-2 border-t border-stone-100 flex-1 min-h-0 flex flex-col justify-end">
            {isAnsweredNow ? (
              <div className={`rounded-xl border p-3 sm:p-4 overflow-y-auto max-h-40 sm:max-h-56 scrollbar-none transition-all ${
                selectedInSession === currentQ.correctIndex
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-300 text-stone-900'
              }`}>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm mb-1">
                  {selectedInSession === currentQ.correctIndex ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                      <span className="text-emerald-900">Hebat! Sekarang Anda Paham!</span>
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
              <div className="rounded-xl border border-dashed border-rose-200 bg-rose-50/50 p-3 sm:p-4 text-xs text-rose-800 flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 shrink-0" />
                <span>
                  Ini adalah soal yang sebelumnya belum tepat. Coba jawab ulang hingga benar!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Options */}
        <div className="bg-white border border-stone-200 rounded-2xl p-3 sm:p-6 shadow-xs flex flex-col justify-between gap-2 sm:gap-2.5 overflow-hidden">
          <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-0.5 sm:mb-1">
            Pilihan Jawaban:
          </div>

          <div className="flex-1 min-h-0 flex flex-col justify-between gap-2 sm:gap-2.5">
            {currentQ.options.map((optText, optIdx) => {
              const isPicked = selectedInSession === optIdx;
              const isCorrect = currentQ.correctIndex === optIdx;

              let optionStyle = 'border-stone-200 bg-stone-50/70 hover:bg-stone-100 text-stone-800';
              let badgeStyle = 'bg-stone-200 text-stone-700';

              if (isAnsweredNow) {
                if (isCorrect) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500 shadow-2xs';
                  badgeStyle = 'bg-emerald-600 text-white font-bold';
                } else if (isPicked) {
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
                  disabled={isAnsweredNow}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full flex-1 min-h-[44px] sm:min-h-[56px] text-left rounded-xl border transition-all flex items-center gap-3 px-3 sm:px-4 py-1.5 sm:py-2.5 relative group ${optionStyle} ${
                    !isAnsweredNow ? 'cursor-pointer hover:border-amber-400 active:scale-[0.99]' : 'cursor-default'
                  }`}
                >
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${badgeStyle}`}>
                    {optionLetters[optIdx]}
                  </span>
                  <div className="flex-1 leading-snug line-clamp-3 sm:line-clamp-2 text-xs sm:text-sm">
                    {optText}
                  </div>
                  {isAnsweredNow && (
                    <div className="shrink-0 pl-1">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : isPicked ? (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Symmetrical Bottom Navigation */}
      <div className="flex-none bg-white border border-stone-200 rounded-xl px-4 py-2 mt-2 shadow-2xs flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-all ${
            currentIndex > 0
              ? 'border-stone-300 bg-white hover:bg-stone-100 text-stone-800'
              : 'border-stone-200 bg-stone-50 text-stone-300 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <div className="text-xs font-semibold text-stone-600 font-mono">
          {currentIndex + 1} / {wrongQuestions.length}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === wrongQuestions.length - 1}
          className={`flex items-center gap-1.5 px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#3E2723] hover:bg-[#2b1b18] text-white shadow-xs ${
            currentIndex === wrongQuestions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <span>Berikutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
