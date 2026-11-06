import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Trophy, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  Play, 
  Zap,
  BookOpen,
  ChevronLeft
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { shuffleQuestionOptions } from '../data/questions';
import { playSound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface ExamModeProps {
  questions: Question[];
  soundEnabled: boolean;
  onRecordAnswer: (record: UserAnswerRecord) => void;
  onGoToMistakes: () => void;
}

export const ExamMode: React.FC<ExamModeProps> = ({
  questions,
  soundEnabled,
  onRecordAnswer,
  onGoToMistakes,
}) => {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);
  const [timeRemaining, setTimeRemaining] = useState<number>(20 * 60); // seconds
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start exam with randomized questions and randomized options (A-D)
  const handleStartExam = () => {
    // Pick N questions randomly and dynamically randomize options
    const shuffled = [...questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, questionCount)
      .map(q => shuffleQuestionOptions(q));
    setExamQuestions(shuffled);
    setExamAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(questionCount * 60); // 1 minute per question
    setExamStarted(true);
    setExamFinished(false);
    playSound('click', soundEnabled);
  };

  // Timer countdown
  useEffect(() => {
    if (examStarted && !examFinished) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStarted, examFinished]);

  const handleSelectOption = (qId: string, optIndex: number) => {
    if (examAnswers[qId] !== undefined) return; // already answered

    const q = examQuestions.find(item => item.id === qId);
    if (!q) return;

    const isCorrect = optIndex === q.correctIndex;
    if (isCorrect) {
      playSound('correct', soundEnabled);
    } else {
      playSound('wrong', soundEnabled);
    }

    setExamAnswers(prev => ({ ...prev, [qId]: optIndex }));

    onRecordAnswer({
      questionId: qId,
      selectedIndex: optIndex,
      isCorrect,
      timestamp: Date.now(),
    });
  };

  const handleFinishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setExamFinished(true);

    // Calculate score
    let correct = 0;
    examQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });

    const scorePct = Math.round((correct / (examQuestions.length || 1)) * 100);
    if (scorePct >= 75) {
      playSound('victory', soundEnabled);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      playSound('click', soundEnabled);
    }
  };

  const currentQ = examQuestions[currentIndex];
  const answeredForCurrent = currentQ ? examAnswers[currentQ.id] : undefined;
  const isCurrentAnswered = answeredForCurrent !== undefined;
  const optionLetters = ['A', 'B', 'C', 'D'];

  // Format timer
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Exam Results calculations
  const results = useMemo(() => {
    if (!examFinished) return null;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    examQuestions.forEach(q => {
      const ans = examAnswers[q.id];
      if (ans === undefined) {
        skipped++;
      } else if (ans === q.correctIndex) {
        correct++;
      } else {
        wrong++;
      }
    });

    const total = examQuestions.length;
    const finalScore = Math.round((correct / (total || 1)) * 100);

    let rankTitle = 'Penggalang Ramu Perintis';
    let rankBadge = '🥉';
    let advice = 'Perbanyak latihan dasar pada kode kehormatan dan simpul!';

    if (finalScore >= 90) {
      rankTitle = 'Pramuka Garuda Kemranjen Tangguh';
      rankBadge = '🏆';
      advice = 'Luar biasa! Penguasaan materi Anda setingkat juara umum Lomba Galang Tangguh 2026!';
    } else if (finalScore >= 75) {
      rankTitle = 'Penggalang Terap Handal';
      rankBadge = '🥇';
      advice = 'Sangat baik! Tinggal memantapkan detail ukuran bendera dan back azimut!';
    } else if (finalScore >= 60) {
      rankTitle = 'Penggalang Rakit Terampil';
      rankBadge = '🥈';
      advice = 'Cukup baik! Tingkatkan hafalan profil tokoh dan aturan UU kenegaraan.';
    }

    return { correct, wrong, skipped, total, finalScore, rankTitle, rankBadge, advice };
  }, [examFinished, examQuestions, examAnswers]);

  // Setup screen
  if (!examStarted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-center">
          
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit']">
              Simulasi Try Out Galang Tangguh 2026
            </h1>
            <p className="text-sm text-stone-500 mt-2 max-w-lg mx-auto leading-relaxed">
              Uji kesiapan regu Anda dalam format simulasi lomba resmi Kwarran Kemranjen. Soal diambil secara acak dari materi SKU Ramu dan PUPK 2026.
            </p>
          </div>

          {/* Configuration options */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-left space-y-4">
            
            <div>
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-2">
                Jumlah Soal Ujian:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[15, 20, 30].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => setQuestionCount(cnt)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                      questionCount === cnt
                        ? 'bg-[#3E2723] text-white border-[#3E2723] shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400'
                    }`}
                  >
                    {cnt} Soal ({cnt} Menit)
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-stone-800 block">
                  Tampilkan Pembahasan Instan Saat Menjawab
                </span>
                <span className="text-[11px] text-stone-500">
                  Langsung ketahui kunci jawaban dan rujukan setelah memilih opsi
                </span>
              </div>
              <button
                onClick={() => setInstantFeedback(!instantFeedback)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                  instantFeedback ? 'bg-amber-600 justify-end' : 'bg-stone-300 justify-start'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
              </button>
            </div>

          </div>

          <button
            onClick={handleStartExam}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Mulai Try Out Lomba Sekarang</span>
          </button>

        </div>
      </div>
    );
  }

  // Result screen
  if (examFinished && results) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-center">
          
          <div className="text-4xl">{results.rankBadge}</div>

          <div>
            <div className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-1">
              Hasil Try Out Galang Tangguh
            </div>
            <h2 className="text-3xl font-extrabold text-stone-900 font-['Outfit']">
              {results.rankTitle}
            </h2>
            <p className="text-sm text-stone-600 mt-2">{results.advice}</p>
          </div>

          {/* Big Score Card */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
              Nilai Akhir
            </div>
            <div className="text-5xl font-black text-amber-600 font-['Outfit'] tabular-nums">
              {results.finalScore}
            </div>
            <div className="text-xs text-stone-500 mt-1">
              Dari Skala 100
            </div>
          </div>

          {/* Breakdown cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
              <div className="text-xs text-emerald-700 font-medium">Jawaban Benar</div>
              <div className="text-2xl font-bold text-emerald-800 font-mono">{results.correct}</div>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
              <div className="text-xs text-rose-700 font-medium">Jawaban Salah</div>
              <div className="text-2xl font-bold text-rose-800 font-mono">{results.wrong}</div>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl">
              <div className="text-xs text-stone-600 font-medium">Dilewati</div>
              <div className="text-2xl font-bold text-stone-700 font-mono">{results.skipped}</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-stone-100">
            {results.wrong > 0 && (
              <button
                onClick={onGoToMistakes}
                className="w-full sm:flex-1 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Pelajari {results.wrong} Soal yang Salah</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={handleStartExam}
              className="w-full sm:flex-1 py-2.5 bg-[#3E2723] hover:bg-[#2e1d1a] text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Coba Try Out Baru</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Active question screen during exam (Single screen 1-page fit, no scrolling)
  return (
    <div className="h-full w-full max-w-7xl mx-auto flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden select-none">
      
      {/* Top Header with Timer and Question Counter */}
      <div className="flex-none flex items-center justify-between gap-2 bg-white/90 border border-stone-200/80 rounded-xl px-3 py-1.5 shadow-2xs mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-stone-700">
            Soal <span className="font-bold text-amber-700 font-mono text-sm">{currentIndex + 1}</span> / {examQuestions.length}
          </span>
          <span className="text-stone-300">·</span>
          <span className="text-xs text-stone-500 hidden sm:inline">
            Terjawab: {Object.keys(examAnswers).length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1.5 font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg ${
            timeRemaining < 120 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-stone-100 text-stone-700'
          }`}>
            <Timer className="w-3.5 h-3.5" />
            <span>{formattedTime}</span>
          </div>

          <button
            onClick={handleFinishExam}
            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg transition-colors"
          >
            Selesai Ujian
          </button>
        </div>
      </div>

      {/* Symmetrical Main Question & Options Viewport */}
      {currentQ && (
        <div className="flex-1 min-h-0 flex flex-col lg:grid lg:grid-cols-2 gap-2.5 sm:gap-4 lg:gap-6 items-stretch justify-between overflow-hidden">
          
          {/* LEFT: Question and Instant Explanation */}
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
              {isCurrentAnswered && instantFeedback ? (
                <div className={`rounded-xl border p-3 sm:p-4 overflow-y-auto max-h-40 sm:max-h-56 scrollbar-none transition-all ${
                  answeredForCurrent === currentQ.correctIndex
                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                    : 'bg-amber-50/90 border-amber-300 text-stone-900'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm mb-1">
                    {answeredForCurrent === currentQ.correctIndex ? (
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
                  <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
                  <span>
                    Try Out Lomba: Waktu berjalan. Pilih salah satu jawaban (A, B, C, D).
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
                const isSelected = answeredForCurrent === optIdx;
                const isCorrectAnswer = currentQ.correctIndex === optIdx;

                let optionStyle = 'border-stone-200 bg-stone-50/70 hover:bg-stone-100 text-stone-800';
                let badgeStyle = 'bg-stone-200 text-stone-700';

                if (isCurrentAnswered) {
                  if (instantFeedback) {
                    if (isCorrectAnswer) {
                      optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500 shadow-2xs';
                      badgeStyle = 'bg-emerald-600 text-white font-bold';
                    } else if (isSelected) {
                      optionStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400 shadow-2xs';
                      badgeStyle = 'bg-rose-600 text-white font-bold';
                    } else {
                      optionStyle = 'border-stone-200 bg-stone-50/30 text-stone-400 opacity-60';
                      badgeStyle = 'bg-stone-100 text-stone-400';
                    }
                  } else {
                    if (isSelected) {
                      optionStyle = 'border-amber-500 bg-amber-50 text-stone-900 font-semibold ring-1 ring-amber-500 shadow-2xs';
                      badgeStyle = 'bg-amber-500 text-stone-950 font-bold';
                    }
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={isCurrentAnswered}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                    className={`w-full flex-1 min-h-[44px] sm:min-h-[56px] text-left rounded-xl border transition-all flex items-center gap-3 px-3 sm:px-4 py-1.5 sm:py-2.5 relative group ${optionStyle} ${
                      !isCurrentAnswered ? 'cursor-pointer hover:border-amber-400 active:scale-[0.99]' : 'cursor-default'
                    }`}
                  >
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${badgeStyle}`}>
                      {optionLetters[optIdx]}
                    </span>
                    <div className="flex-1 leading-snug line-clamp-3 sm:line-clamp-2 text-xs sm:text-sm">
                      {optText}
                    </div>
                    {isCurrentAnswered && instantFeedback && (
                      <div className="shrink-0 pl-1">
                        {isCorrectAnswer ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : isSelected ? (
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

      {/* Symmetrical Bottom Navigation */}
      <div className="flex-none bg-white border border-stone-200 rounded-xl px-4 py-2 mt-2 shadow-2xs flex items-center justify-between gap-3">
        <button
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
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
          {currentIndex + 1} / {examQuestions.length}
        </div>

        <button
          onClick={() => {
            if (currentIndex < examQuestions.length - 1) {
              setCurrentIndex(prev => prev + 1);
            } else {
              handleFinishExam();
            }
          }}
          className="flex items-center gap-1.5 px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold bg-[#3E2723] hover:bg-[#2e1d1a] text-white shadow-xs"
        >
          <span>{currentIndex < examQuestions.length - 1 ? 'Soal Berikutnya' : 'Selesai & Lihat Skor'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
