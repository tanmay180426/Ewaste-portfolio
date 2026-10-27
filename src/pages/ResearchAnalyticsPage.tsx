import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import sikkimData from '../data/sikkimData.json';
import { ASSIGNMENT_CATALOGUE, AssignmentItem } from '../data/catalogue';
import { 
  BarChart3, 
  PieChart as PieIcon, 
  Download, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  Layers, 
  Flame, 
  FileSpreadsheet, 
  FileText,
  MapPin,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface ResearchAnalyticsPageProps {
  onSelectItem: (item: AssignmentItem) => void;
}

export const ResearchAnalyticsPage: React.FC<ResearchAnalyticsPageProps> = ({
  onSelectItem
}) => {
  const [activeTab, setActiveTab] = useState<'sikkim' | 'metals' | 'spcb' | 'indiaVsWorld'>('sikkim');

  // Find supporting documents
  const sikkimDeckDoc = ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-sikkim-deck');
  const sikkimTrackerDoc = ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-sikkim-tracker');
  const sikkimSpcbDoc = ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-sikkim-spcb-report');
  const ewasteToWealthDoc = ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-sikkim-metals');
  const indiaVsWorldDoc = ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-india-vs-world');
  const hdProcessDoc = ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-hydrogen-decrepitation-flow');

  // Chart data for district generation
  const districtChartData = sikkimData.districts.map(d => ({
    name: d.district,
    Generation: d.totalTonnes,
    PopulationK: Math.round(d.population / 1000)
  }));

  // SPCB data for chart
  const spcbMarkersData = [
    { marker: 'PBDEs (ng/g)', Baseline: 120, DumpsiteHotspot: 8100 },
    { marker: 'PCBs (ng/g)', Baseline: 21, DumpsiteHotspot: 950 },
    { marker: 'SCCPs (ng/g)', Baseline: 18, DumpsiteHotspot: 30200 },
    { marker: 'Copper (ug/g)', Baseline: 60, DumpsiteHotspot: 1620 },
    { marker: 'Lead (ug/g)', Baseline: 60, DumpsiteHotspot: 1180 },
  ];

  // Global comparison data
  const globalComparisonData = [
    { country: 'China', GenerationMT: 10.12, RecyclingRate: 16.0 },
    { country: 'United States', GenerationMT: 6.92, RecyclingRate: 15.0 },
    { country: 'India', GenerationMT: 3.23, RecyclingRate: 10.0 },
    { country: 'Japan', GenerationMT: 2.57, RecyclingRate: 22.0 },
    { country: 'Germany', GenerationMT: 1.61, RecyclingRate: 51.5 },
    { country: 'United Kingdom', GenerationMT: 1.60, RecyclingRate: 57.0 },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-emerald-950 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            Empirical Findings & Field Analytics
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Research & Data Analysis
          </h1>
          <p className="text-sm text-slate-500 dark:text-emerald-400/80 mt-1 max-w-3xl">
            Interactive visual analysis derived directly from primary research files: the Sikkim Sub-National Assessment (FY 2026), SPCB Soil Pollution Diagnostics, and Global E-Waste Monitors.
          </p>
        </div>

        {/* Quick Document Links */}
        <div className="flex flex-wrap gap-2">
          {sikkimTrackerDoc && (
            <a
              href={sikkimTrackerDoc.publicAssetPath}
              download={sikkimTrackerDoc.originalFilename}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 hover:bg-emerald-100 transition-colors"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>State Tracker (.xlsx)</span>
            </a>
          )}
          {sikkimDeckDoc && (
            <a
              href={sikkimDeckDoc.publicAssetPath}
              download={sikkimDeckDoc.originalFilename}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#13231e] text-slate-700 dark:text-emerald-300 hover:bg-slate-200 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Sikkim Deck (.pptx)</span>
            </a>
          )}
        </div>
      </div>

      {/* Analytics Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-emerald-950/60 pb-3">
        {[
          { id: 'sikkim', label: '1. Sikkim District Assessment (FY2026)', icon: <MapPin className="w-4 h-4" /> },
          { id: 'metals', label: '2. District Recoverable Metals & Methods', icon: <Layers className="w-4 h-4" /> },
          { id: 'spcb', label: '3. SPCB Environmental Diagnostics', icon: <AlertTriangle className="w-4 h-4" /> },
          { id: 'indiaVsWorld', label: '4. India vs Global Peers Benchmark', icon: <TrendingUp className="w-4 h-4" /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                : 'bg-white dark:bg-[#0c1814] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-950 hover:bg-slate-50 dark:hover:bg-[#11231c]'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: SIKKIM DISTRICT ASSESSMENT */}
      {activeTab === 'sikkim' && (
        <div className="space-y-8">
          
          {/* Top Scorecard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark">
              <span className="text-xs font-semibold text-slate-400 dark:text-emerald-500 uppercase tracking-wider block mb-1">
                State Score (100-Point Audit)
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-amber-600 dark:text-amber-400">
                  {sikkimData.stateScore}
                </span>
                <span className="text-xs font-bold text-slate-400">/ 100</span>
              </div>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                {sikkimData.status}
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark">
              <span className="text-xs font-semibold text-slate-400 dark:text-emerald-500 uppercase tracking-wider block mb-1">
                Statewide Generation
              </span>
              <div className="text-3xl font-black text-slate-900 dark:text-white">
                {sikkimData.totalGeneratedTonnes} <span className="text-sm font-semibold text-slate-400">tonnes</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-emerald-400 mt-1">
                Across all 6 districts in FY 2026
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark">
              <span className="text-xs font-semibold text-slate-400 dark:text-emerald-500 uppercase tracking-wider block mb-1">
                Formally Collected
              </span>
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                {sikkimData.totalCollectedTonnes} <span className="text-sm font-semibold text-slate-400">tonnes</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-emerald-400 mt-1">
                Processed through authorized hubs
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark">
              <span className="text-xs font-semibold text-slate-400 dark:text-emerald-500 uppercase tracking-wider block mb-1">
                Formal Capture Rate
              </span>
              <div className="text-3xl font-black text-rose-600 dark:text-rose-400">
                {sikkimData.captureRatePercent}%
              </div>
              <p className="text-xs text-slate-500 dark:text-emerald-400 mt-1">
                Critical 94.1% collection shortfall gap
              </p>
            </div>

          </div>

          {/* District Generation Chart & Waste Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bar Chart */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    District-Wise E-Waste Generation (Tonnes)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-emerald-400">
                    Source: State E-Waste Tracker Inventory (CPCB Schedule I Categories)
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-100 dark:bg-emerald-950 text-slate-700 dark:text-emerald-300">
                  Total: 310.5 t
                </span>
              </div>

              <div className="h-72 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={districtChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} unit=" t" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#091310', borderColor: '#065f46', borderRadius: '8px', color: '#fff' }}
                      formatter={(val: any) => [`${val} Tonnes`, 'Generation']}
                    />
                    <Bar dataKey="Generation" fill="#10b981" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="text-xs text-slate-600 dark:text-emerald-300/80 leading-relaxed bg-slate-50 dark:bg-[#08120f] p-3.5 rounded-xl border border-slate-200 dark:border-emerald-950">
                <span className="font-semibold text-slate-800 dark:text-emerald-300">District Divide Insight: </span>
                Gangtok alone accounts for 120.0 tonnes (38.6% of the state total) and holds formal collection hubs. Gyalshing (52.5 t), Mangan (28.0 t), and Soreng (26.0 t) currently lack active licensed recycling infrastructure, resulting in direct seepage into Himalayan dump-slopes.
              </div>
            </div>

            {/* Waste Stream Composition Pie */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Generation Mix by Category
                </h3>
                <p className="text-xs text-slate-500 dark:text-emerald-400">
                  E-Waste (Management) Rules 2022 schedule classification
                </p>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sikkimData.wasteComposition}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={45}
                      paddingAngle={3}
                    >
                      {sikkimData.wasteComposition.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#091310', borderColor: '#065f46', borderRadius: '8px', color: '#fff' }}
                      formatter={(val: any) => [`${val}%`, 'Share']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-1.5 text-xs">
                {sikkimData.wasteComposition.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-700 dark:text-emerald-200">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.name}
                    </span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* District Breakdown Table */}
          <div className="bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 p-6 shadow-card dark:shadow-card-dark space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Sikkim District Inventory & Capture Performance Matrix
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-[#08120f] border-b border-slate-200 dark:border-emerald-950 text-slate-500 dark:text-emerald-400 uppercase font-semibold">
                  <tr>
                    <th className="py-3 px-3">District</th>
                    <th className="py-3 px-3">Population</th>
                    <th className="py-3 px-3">IT & Telecom (kg)</th>
                    <th className="py-3 px-3">Consumer Elec. (kg)</th>
                    <th className="py-3 px-3">Large Equip. (kg)</th>
                    <th className="py-3 px-3">Batteries (kg)</th>
                    <th className="py-3 px-3">Total Gen. (t)</th>
                    <th className="py-3 px-3">Recycler Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-emerald-950/60 font-mono">
                  {sikkimData.districts.map((d, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-[#10221c]/40">
                      <td className="py-3 px-3 font-sans font-bold text-slate-900 dark:text-white">
                        {d.district}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-emerald-300">
                        {d.population.toLocaleString()}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-emerald-300">
                        {d.itTelecomKg.toLocaleString()}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-emerald-300">
                        {d.consumerElecKg.toLocaleString()}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-emerald-300">
                        {d.largeSmallEquipKg.toLocaleString()}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-emerald-300">
                        {d.batteriesKg.toLocaleString()}
                      </td>
                      <td className="py-3 px-3 font-bold text-emerald-600 dark:text-emerald-400">
                        {d.totalTonnes} t
                      </td>
                      <td className="py-3 px-3 font-sans">
                        {d.district === 'Gangtok' || d.district === 'Pakyong' ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                            <CheckCircle className="w-3.5 h-3.5" /> Licensed Facility
                          </span>
                        ) : (
                          <span className="text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1 text-[11px]">
                            <AlertTriangle className="w-3.5 h-3.5" /> No Local Coverage
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: DISTRICT RECOVERABLE METALS */}
      {activeTab === 'metals' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 p-6 shadow-card dark:shadow-card-dark space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  District-Wise Recoverable Metals & Recommended Extraction Technologies
                </h3>
                <p className="text-xs text-slate-500 dark:text-emerald-400">
                  Primary source: E-Waste to Wealth Sub-National Study (Tanmay Lalge, Roll 24102C0034)
                </p>
              </div>

              {ewasteToWealthDoc && (
                <button
                  onClick={() => onSelectItem(ewasteToWealthDoc)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors self-start"
                >
                  <span>Inspect Full Infographic</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {[
                {
                  district: "Gangtok",
                  sources: "IT offices, commercial data hubs, telecom towers, educational institutes",
                  metals: ["Cu", "Au", "Ag", "Pd", "Sn", "Pb", "Ni", "Co", "Li", "Ta", "Nb", "Ga", "In", "Nd", "Dy", "Pr"],
                  methods: "Mechanical separation, Hydrometallurgy, Electrorefining, Hydrogen Decrepitation, Molten Salt Electrolysis"
                },
                {
                  district: "Namchi",
                  sources: "Households, commercial electronics, discarded lithium batteries",
                  metals: ["Cu", "Al", "Fe", "Au", "Ag", "Li", "Co", "Ni", "Sn"],
                  methods: "Mechanical separation, Hydrometallurgy, Electrowinning"
                },
                {
                  district: "Mangan",
                  sources: "Consumer electronics, rural wireless telecommunication equipment",
                  metals: ["Cu", "Al", "Fe", "Au", "Ag", "Pd", "Ta", "Nb"],
                  methods: "Mechanical separation, Hydrometallurgy, Molten Salt Electrolysis"
                },
                {
                  district: "Gyalshing",
                  sources: "Household appliances, LED luminaires, legacy desktop computers",
                  metals: ["Cu", "Al", "Fe", "Au", "Ag", "Ga", "In", "Sn"],
                  methods: "Mechanical separation, Hydrometallurgy, Hydrothermal Processing"
                },
                {
                  district: "Pakyong",
                  sources: "Pakyong Airport avionics, communications radar systems, computer servers",
                  metals: ["Cu", "Au", "Ag", "Pd", "Li", "Co", "Ni", "Ta", "Nb"],
                  methods: "Hydrometallurgy, Electrorefining, Molten Salt Electrolysis"
                },
                {
                  district: "Soreng",
                  sources: "Household consumer appliances, feature phones, smartphones",
                  metals: ["Cu", "Al", "Fe", "Au", "Ag", "Li", "Co"],
                  methods: "Mechanical separation, Hydrometallurgy"
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {item.district}
                    </h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      {item.metals.length} Metals
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-emerald-500 block mb-1">
                      Primary Sources
                    </span>
                    <p className="text-xs text-slate-600 dark:text-emerald-300/80">
                      {item.sources}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-emerald-500 block mb-1">
                      Recoverable Metals
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.metals.map((m, mIdx) => (
                        <span 
                          key={mIdx}
                          className="px-1.5 py-0.5 rounded font-mono text-[10px] font-bold bg-white dark:bg-[#12221c] border border-slate-200 dark:border-emerald-900/60 text-slate-800 dark:text-emerald-200"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-emerald-950/80">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-emerald-500 block mb-0.5">
                      Recommended Extraction Methods
                    </span>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      {item.methods}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Rare Earth Recovery Module */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 via-forest-950/30 to-[#07130e] border border-emerald-800/40 mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-base">
                    All Districts: Rare Earth Elements (Nd, Dy, Pr) via Hydrogen Decrepitation
                  </h4>
                </div>

                {hdProcessDoc && (
                  <button
                    onClick={() => onSelectItem(hdProcessDoc)}
                    className="text-xs font-semibold text-emerald-300 hover:text-white underline"
                  >
                    View Industrial Flow Diagram
                  </button>
                )}
              </div>

              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Across all Himalayan districts where hard drives, EV motors, and acoustic speakers are aggregated, Neodymium permanent magnets (Nd2Fe14B) can be decrepitated using hydrogen gas at 2–10 bar and 300–500°C. This avoids aggressive smelting, reduces CO2 emissions, and yields high-purity Neodymium (Nd 60), Dysprosium (Dy 66), and Praseodymium (Pr 59).
              </p>
            </div>

          </div>
        </div>
      )}

      {/* TAB 3: SPCB ENVIRONMENTAL DIAGNOSTICS */}
      {activeTab === 'spcb' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Sikkim Soil & Sediment E-Waste Marker Contamination vs Natural Baseline
                </h3>
                <p className="text-xs text-slate-500 dark:text-emerald-400">
                  Source: Sikkim State Pollution Control Board (SPCB) E-Waste Monitoring Program (FY 2026)
                </p>
              </div>

              {sikkimSpcbDoc && (
                <button
                  onClick={() => onSelectItem(sikkimSpcbDoc)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors self-start"
                >
                  <span>Open SPCB Diagnostic Report</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Diagnostic Markers Comparison Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950 space-y-2">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  PBDEs (Flame Retardants)
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">6.8 – 8,100 <span className="text-xs font-normal">ng/g</span></span>
                  <span className="text-xs font-mono text-slate-400">Baseline: 1.5 – 120 ng/g</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-emerald-300/80">
                  Dumpsite soils contain up to 67x higher concentrations than pristine Himalayan background levels due to open burning of cable sheaths and plastic chassis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950 space-y-2">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  PCBs (Polychlorinated Biphenyls)
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">950 <span className="text-xs font-normal">ng/g</span></span>
                  <span className="text-xs font-mono text-slate-400">Baseline: 21 ng/g</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-emerald-300/80">
                  Over 45x baseline spike detected around legacy transformers and capacitor dumping grounds, persisting without microbial biodegradation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950 space-y-2">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  SCCPs (Short Chain Chlorinated Paraffins)
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">30,200 <span className="text-xs font-normal">ng/g</span></span>
                  <span className="text-xs font-mono text-slate-400">Baseline: 18 ng/g</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-emerald-300/80">
                  Extreme localized spikes up to 1,677x natural baseline recorded, entering sub-surface aquifers and posing severe bioaccumulation risks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950 space-y-2">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  Heavy Metals: Copper & Lead
                </span>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">Cu 1,620 | Pb 1,180 <span className="text-xs font-normal">ug/g</span></span>
                  <span className="text-xs font-mono text-slate-400">Baseline: 15 – 60 ug/g</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-emerald-300/80">
                  Concentrations drastically surpass permissible soil agricultural thresholds, verifying active leaching of PCB solder and conductive copper tracings.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INDIA VS WORLD BENCHMARK */}
      {activeTab === 'indiaVsWorld' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  India E-Waste Surge vs Leading Global Producers
                </h3>
                <p className="text-xs text-slate-500 dark:text-emerald-400">
                  Source: Handwritten Class Activity & Global E-Waste Monitor (Tanmay Lalge)
                </p>
              </div>

              {indiaVsWorldDoc && (
                <button
                  onClick={() => onSelectItem(indiaVsWorldDoc)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors self-start"
                >
                  <span>View Handwritten Submission</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              
              {/* Bar Chart */}
              <div className="lg:col-span-7 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={globalComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                    <XAxis dataKey="country" stroke="#94a3b8" fontSize={11} />
                    <YAxis stroke="#94a3b8" fontSize={11} unit=" MT" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#091310', borderColor: '#065f46', borderRadius: '8px', color: '#fff' }}
                      formatter={(val: any) => [`${val} Million Tonnes`, 'Generation']}
                    />
                    <Bar dataKey="GenerationMT" fill="#059669" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Data Notes */}
              <div className="lg:col-span-5 space-y-3 text-xs leading-relaxed text-slate-600 dark:text-emerald-300/80">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    India's 64% Growth Trajectory:
                  </span>
                  India's e-waste generation surged from 1.97 million metric tonnes in 2015 to 3.23 million MT in 2019, marking the fastest generation acceleration among examined nations.
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    Formal Recycling Efficiency Gap:
                  </span>
                  While Germany (51.5%) and the United Kingdom (57.0%) capture more than half of discarded electronics via the European Union's WEEE Directive, India's formal collection remains around 10%, with over 90% processed in informal urban clusters.
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
