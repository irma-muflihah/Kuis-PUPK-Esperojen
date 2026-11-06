import React from 'react';
import { Compass, Volume2, VolumeX, Award, RotateCcw, Maximize, Minimize, Tv, Smartphone } from 'lucide-react';
import { QuizMode, DisplayView } from '../types/quiz';

interface NavbarProps {
  currentMode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  mistakesCount: number;
  onResetStats: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  displayView: DisplayView;
  onToggleDisplayView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSelectMode,
  soundEnabled,
  onToggleSound,
  mistakesCount,
  onResetStats,
  isFullscreen,
  onToggleFullscreen,
  displayView,
  onToggleDisplayView,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#321e17] text-[#fcf9f6] border-b border-[#4e3227] shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Single text wordmark */}
        <div 
          onClick={() => onSelectMode('practice')}
          className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white font-['Outfit'] whitespace-nowrap">
              GALANG TANGGUH <span className="text-amber-400">2026</span>
            </div>
            <div className="text-[10px] text-amber-200/70 -mt-0.5 tracking-wider font-medium hidden sm:block">
              KWARRAN KEMRANJEN · KWARCAB BANYUMAS
            </div>
          </div>
        </div>

        {/* Zone 2: Navigation Links (single line, clean typographic hover states) */}
        <nav className="hidden xl:flex items-center gap-1.5">
          <button
            onClick={() => onSelectMode('practice')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentMode === 'practice'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Latihan Instan
          </button>

          <button
            onClick={() => onSelectMode('pos')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentMode === 'pos'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            6 Pos Ujian Lapangan
          </button>

          <button
            onClick={() => onSelectMode('tryout')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentMode === 'tryout'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Simulasi Try Out
          </button>

          <button
            onClick={() => onSelectMode('mistakes')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentMode === 'mistakes'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>Soal Salah</span>
            {mistakesCount > 0 && (
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-rose-500 text-white rounded-full">
                {mistakesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectMode('guide')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
              currentMode === 'guide'
                ? 'bg-amber-500 text-stone-950 shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Kamus Rumus
          </button>
        </nav>

        {/* Zone 3: Primary Action Controls & Display/Fullscreen Modes */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* IFP (Interactive Flat Panel) Mode Toggle */}
          <button
            onClick={onToggleDisplayView}
            title={displayView === 'ifp' ? 'Kembali ke Tampilan Standar' : 'Aktifkan Mode Panel IFP / Layar Lebar Kelas'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all ${
              displayView === 'ifp'
                ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-sm ring-2 ring-amber-400/40'
                : 'bg-stone-800/80 hover:bg-stone-700 text-stone-200 border-stone-700 hover:border-amber-400/60'
            }`}
          >
            <Tv className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            <span className="hidden md:inline">
              {displayView === 'ifp' ? 'Mode IFP Aktif' : 'Mode IFP / Smartboard'}
            </span>
          </button>

          {/* Fullscreen Toggle (Full Screen HP / Full Screen IFP) */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Keluar dari Layar Penuh (Esc)' : 'Tampilkan Layar Penuh (Full Screen)'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all ${
              isFullscreen
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                : 'bg-stone-800/80 hover:bg-stone-700 text-stone-200 border-stone-700 hover:text-emerald-400'
            }`}
          >
            {isFullscreen ? (
              <>
                <Minimize className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Keluar Penuh</span>
              </>
            ) : (
              <>
                <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Layar Penuh</span>
              </>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Matikan Suara SFX' : 'Aktifkan Suara SFX'}
            className="p-2 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-amber-400 border border-stone-700 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
          </button>

          {/* Reset Stats */}
          <button
            onClick={onResetStats}
            title="Reset Riwayat Latihan"
            className="hidden sm:block p-2 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-rose-400 border border-stone-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="xl:hidden flex items-center overflow-x-auto px-3 py-2 bg-[#261711] border-t border-[#442b22] gap-1.5 text-xs scrollbar-none">
        <button
          onClick={() => onSelectMode('practice')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentMode === 'practice' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300'
          }`}
        >
          Latihan Instan
        </button>
        <button
          onClick={() => onSelectMode('pos')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentMode === 'pos' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300'
          }`}
        >
          6 Pos Ujian
        </button>
        <button
          onClick={() => onSelectMode('tryout')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentMode === 'tryout' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300'
          }`}
        >
          Try Out Lomba
        </button>
        <button
          onClick={() => onSelectMode('mistakes')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 flex items-center gap-1 transition-colors ${
            currentMode === 'mistakes' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300'
          }`}
        >
          <span>Soal Salah</span>
          {mistakesCount > 0 && (
            <span className="text-[10px] bg-rose-500 text-white rounded-full px-1.5 font-bold">
              {mistakesCount}
            </span>
          )}
        </button>
        <button
          onClick={() => onSelectMode('guide')}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
            currentMode === 'guide' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300'
          }`}
        >
          Kamus Rumus
        </button>
      </div>
    </header>
  );
};
