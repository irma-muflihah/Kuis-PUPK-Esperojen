import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Calculator, 
  Compass, 
  Flag, 
  Anchor, 
  Droplets, 
  Check, 
  Copy,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CHEAT_SHEET } from '../data/cheatsheet';

export const PocketGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Interactive Back-Azimut calculator
  const [inputBearing, setInputBearing] = useState<string>('65');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const parsedBearing = parseFloat(inputBearing);
  let calculatedBackAzimuth: { result: number; formula: string } | null = null;
  if (!isNaN(parsedBearing) && parsedBearing >= 0 && parsedBearing <= 360) {
    if (parsedBearing < 180) {
      calculatedBackAzimuth = {
        result: parsedBearing + 180,
        formula: `${parsedBearing}° + 180° = ${parsedBearing + 180}° (karena < 180°)`,
      };
    } else {
      calculatedBackAzimuth = {
        result: parsedBearing - 180,
        formula: `${parsedBearing}° - 180° = ${parsedBearing - 180}° (karena ≥ 180°)`,
      };
    }
  }

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const filteredSections = CHEAT_SHEET.map(sec => {
    if (activeTab !== 'all' && sec.id !== activeTab) return null;
    const matchingItems = sec.items.filter(item => 
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.note && item.note.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    if (matchingItems.length === 0 && searchTerm) return null;
    return { ...sec, items: searchTerm ? matchingItems : sec.items };
  }).filter(Boolean) as typeof CHEAT_SHEET;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
            Buku Saku Digital Galang Tangguh 2026
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit']">
            Ringkasan Materi, Rumus & Profil
          </h1>
          <p className="text-sm text-stone-500 mt-2 max-w-xl leading-relaxed">
            Rangkuman cepat fakta penting dari SKU Penggalang Ramu dan Panduan Materi PUPK Kwarran Kemranjen untuk pegangan regu sebelum bertanding.
          </p>
        </div>

        {/* Interactive Back-Azimut Mini Tool */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:w-80 shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-2">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>Kalkulator Rumus Back-Azimut</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-xs text-stone-600 font-medium">Sudut Bidik:</label>
              <input
                type="number"
                min="0"
                max="360"
                value={inputBearing}
                onChange={e => setInputBearing(e.target.value)}
                className="w-24 px-2 py-1 bg-white border border-stone-300 rounded text-xs font-mono font-bold text-stone-900 focus:outline-amber-600"
                placeholder="0-360"
              />
              <span className="text-xs font-bold text-stone-500">derajat (°)</span>
            </div>

            {calculatedBackAzimuth && (
              <div className="pt-2 border-t border-amber-200/70 text-xs">
                <div className="text-stone-600 text-[11px]">Hasil Sasaran Balik:</div>
                <div className="text-base font-bold text-amber-900 font-mono">
                  {calculatedBackAzimuth.result}°
                </div>
                <div className="text-[11px] text-amber-800 font-mono mt-0.5">
                  {calculatedBackAzimuth.formula}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar & Category Filter */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Cari materi (misal: Kak Maskuri, UU 24/2009, Simpul Mati, 12 DE)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:bg-white focus:outline-amber-600 transition-colors"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-[#3E2723] text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Semua Rangkuman
          </button>
          {CHEAT_SHEET.map(sec => (
            <button
              key={sec.id}
              onClick={() => setActiveTab(sec.id)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === sec.id
                  ? 'bg-[#3E2723] text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {sec.title.split(' ')[0]} {sec.title.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Sections Cards */}
      <div className="space-y-6">
        {filteredSections.map(section => (
          <div key={section.id} className="bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden">
            <div className="bg-stone-50/80 px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <h3 className="font-bold text-stone-900 text-base font-['Outfit'] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>{section.title}</span>
              </h3>
              <span className="text-xs text-stone-500 font-medium">
                {section.items.length} Poin Penting
              </span>
            </div>

            <div className="divide-y divide-stone-100">
              {section.items.map((item, idx) => {
                const copyKey = `${section.id}-${idx}`;
                const isCopied = copiedKey === copyKey;

                return (
                  <div key={idx} className="p-4 sm:px-6 hover:bg-stone-50/50 transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="sm:w-1/3">
                      <span className="text-xs font-bold text-stone-800">
                        {item.label}
                      </span>
                    </div>

                    <div className="sm:w-2/3 flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-amber-950 font-mono">
                          {item.value}
                        </div>
                        {item.note && (
                          <div className="text-xs text-stone-500 mt-0.5">
                            {item.note}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleCopy(`${item.label}: ${item.value}`, copyKey)}
                        title="Salin Poin"
                        className="text-stone-400 hover:text-stone-700 p-1 rounded transition-colors shrink-0"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredSections.length === 0 && (
          <div className="text-center py-12 text-stone-500 text-sm">
            Tidak ditemukan rangkuman materi dengan kata kunci "{searchTerm}".
          </div>
        )}
      </div>

    </div>
  );
};
