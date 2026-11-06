import React, { useState, useMemo } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ArrowLeft, 
  Star, 
  ShieldCheck, 
  Compass, 
  RotateCcw,
  Sparkles,
  BookOpen,
  ChevronLeft
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { POS_STATIONS } from '../data/questions';
import { playSound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface PosModeProps {
  questions: Question[];
  soundEnabled: boolean;
  savedAnswers: Record<string, UserAnswerRecord>;
  onRecordAnswer: (record: UserAnswerRecord) => void;
}

export const PosMode: React.FC<PosModeProps> = ({
  questions,
  soundEnabled,
  savedAnswers,
  onRecordAnswer,
}) => {
  const [activePos, setActivePos] = useState<number | null>(null);
  const [posQuestionIdx, setPosQuestionIdx] = useState(0);

  // Group questions by Pos number (1-6)
  const posQuestions = useMemo(() => {
    if (!activePos) return [];
    return questions.filter(q => q.posNumber === activePos);
  }, [questions, activePos]);

  // Pos progress calculation
  const posProgressMap = useMemo(() => {
    const map: Record<number, { total: number; answered: number; correct: number }> = {};
    POS_STATIONS.forEach(pos => {
      const qList = questions.filter(q => q.posNumber === pos.pos);
      let answered = 0;
      let correct = 0;
      qList.forEach(q => {
        const rec = savedAnswers[q.id];
        if (rec) {
          answered++;
          if (rec.isCorrect) correct++;
        }
      });
      map[pos.pos] = { total: qList.length, answered, correct };
    });
    return map;
  }, [questions, savedAnswers]);

  const currentQ = posQuestions[posQuestionIdx];
  const currentRecord = currentQ ? savedAnswers[currentQ.id] : undefined;
  const isAnswered = currentRecord !== undefined;
  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleSelectOption = (idx: number) => {
    if (!currentQ || isAnswered) return;
    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      playSound('correct', soundEnabled);
    } else {
      playSound('wrong', soundEnabled);
    }

    onRecordAnswer({
      questionId: currentQ.id,
      selectedIndex: idx,
      isCorrect,
      timestamp: Date.now(),
    });

    // Check if this completes the Pos
    const currentPosStats = posProgressMap[activePos!];
    if (currentPosStats && currentPosStats.answered + 1 >= currentPosStats.total) {
      setTimeout(() => {
        playSound('victory', soundEnabled);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
      }, 600);
    }
  };

  const handleEnterPos = (posNum: number) => {
    setActivePos(posNum);
    setPosQuestionIdx(0);
    playSound('click', soundEnabled);
  };

  const handleBackToPosList = () => {
    setActivePos(null);
    playSound('click', soundEnabled);
  };

  // If viewing the Pos selector list
  if (activePos === null) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#5D4037] text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              <span>Simulasi Ujian Lapangan Galang Tangguh 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Outfit'] mb-2">
              6 Pos Pengujian Pramuka Penggalang
            </h1>
            <p className="text-amber-100/80 text-sm leading-relaxed">
              Kuasai setiap stasiun pos ujian seperti suasana lomba sesungguhnya di lapangan Kwarran Kemranjen. Setiap jawaban langsung menampilkan pembahasan dan rujukan resmi SKU/PUPK.
            </p>
          </div>
          <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 6 Pos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POS_STATIONS.map((pos) => {
            const stats = posProgressMap[pos.pos] || { total: 0, answered: 0, correct: 0 };
            const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            const isFinished = stats.answered === stats.total && stats.total > 0;

            return (
              <div
                key={pos.pos}
                onClick={() => handleEnterPos(pos.pos)}
                className="bg-white border border-stone-200 hover:border-amber-500 rounded-xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      POS {pos.pos}
                    </span>
                    {isFinished && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        Lulus
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors text-base font-['Outfit'] mb-1.5">
                    {pos.title.replace(`Pos ${pos.pos}: `, '')}
                  </h3>
                  
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-4">
                    {pos.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <div className="flex items-center justify-between text-xs text-stone-600 mb-1.5">
                    <span>Progres Soal: {stats.answered}/{stats.total}</span>
                    <span className="font-semibold text-stone-800">{percentage}% Benar</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        percentage >= 80 ? 'bg-emerald-500' : percentage >= 50 ? 'bg-amber-500' : 'bg-[#5D4037]'
                      }`}
                      style={{ width: `${(stats.answered / (stats.total || 1)) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-3 text-xs font-bold text-amber-700 group-hover:translate-x-0.5 transition-transform">
                    <span>Masuk ke Pos Ini</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Pos View (Single Screen 1-page fit, no scrolling)
  const currentPosData = POS_STATIONS.find(p => p.pos === activePos)!;

  return (
    <div className="h-full w-full max-w-7xl mx-auto flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden select-none">
      
      {/* Top Pos Navigation Header */}
      <div className="flex-none flex items-center justify-between gap-2 bg-white/90 border border-stone-200/80 rounded-xl px-3 py-1.5 shadow-2xs mb-2">
        <button
          onClick={handleBackToPosList}
          className="flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke 6 Pos</span>
        </button>

        <div className="text-xs font-bold text-amber-800">
          {currentPosData.title}
        </div>

        <div className="text-xs font-semibold text-stone-700 font-mono">
          Soal {posQuestionIdx + 1} / {posQuestions.length}
        </div>
      </div>

      {/* Symmetrical Main Card Viewport */}
      {currentQ && (
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
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
                  <span>
                    Jawab pertanyaan pos ini. Jawaban yang benar dan ulasan langsung ditampilkan.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: 4 Options */}
          <div className="bg-white border border-stone-200 rounded-2xl p-3 sm:p-6 shadow-xs flex flex-col justify-between gap-2 sm:gap-2.5 overflow-hidden">
            <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-0.5 sm:mb-1">
              Pilihan Jawaban:
            </div>

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
                  } else if (isUserPick) {
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
                    <div className="flex-1 leading-snug line-clamp-3 sm:line-clamp-2 text-xs sm:text-sm">
                      {optText}
                    </div>
                    {isAnswered && (
                      <div className="shrink-0 pl-1">
                        {isCorrectAnswer ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isUserPick ? (
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
      )}

      {/* Symmetrical Bottom Controls */}
      <div className="flex-none bg-white border border-stone-200 rounded-xl px-4 py-2 mt-2 shadow-2xs flex items-center justify-between gap-3">
        <button
          onClick={() => setPosQuestionIdx(prev => Math.max(0, prev - 1))}
          disabled={posQuestionIdx === 0}
          className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-all ${
            posQuestionIdx > 0
              ? 'border-stone-300 bg-white hover:bg-stone-100 text-stone-800'
              : 'border-stone-200 bg-stone-50 text-stone-300 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <div className="text-xs font-semibold text-stone-600 font-mono">
          {posQuestionIdx + 1} / {posQuestions.length}
        </div>

        <button
          onClick={() => {
            if (posQuestionIdx < posQuestions.length - 1) {
              setPosQuestionIdx(prev => prev + 1);
            } else {
              handleBackToPosList();
            }
          }}
          className="flex items-center gap-1.5 px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#3E2723] hover:bg-[#2e1c19] text-white shadow-xs"
        >
          <span>{posQuestionIdx < posQuestions.length - 1 ? 'Soal Berikutnya' : 'Selesai Pos Ini'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
