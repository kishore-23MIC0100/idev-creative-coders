import React from "react";

interface ProjectPreviewProps {
  id: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ id }) => {
  switch (id) {
    case "smart-traffic":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 to-slate-900/40 [html.light_&]:from-emerald-100/40 [html.light_&]:to-slate-200/40 flex items-center justify-center p-8 overflow-hidden select-none">
          {/* Abstract Traffic Grid overlay */}
          <div className="absolute inset-0 opacity-15 [html.light_&]:opacity-30 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [html.light_&]:bg-[radial-gradient(#047857_1.5px,transparent_1.5px)] bg-[size:16px_16px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-emerald-500/20 [html.light_&]:border-emerald-300 rounded-xl p-6 bg-surface-secondary/40 [html.light_&]:bg-white/80 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 [html.light_&]:text-emerald-800 font-bold">DETECTING: VEHICLE</span>
              <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 [html.light_&]:text-emerald-800 [html.light_&]:bg-emerald-100 px-2 py-0.5 rounded font-bold">LIVE FEEDS</span>
            </div>
            {/* SVG traffic simulation mockup */}
            <svg viewBox="0 0 200 80" className="w-full h-1/2 opacity-80 [html.light_&]:opacity-100 my-2">
              <line x1="10" y1="40" x2="190" y2="40" className="stroke-slate-700 [html.light_&]:stroke-slate-400" strokeWidth="2.5" strokeDasharray="4 4" />
              <rect x="30" y="30" width="20" height="12" rx="2" fill="#10b981" fillOpacity="0.4" className="stroke-emerald-500 [html.light_&]:fill-emerald-100 [html.light_&]:stroke-emerald-600 [html.light_&]:fill-opacity-90" strokeWidth="1.5" />
              <rect x="90" y="38" width="25" height="12" rx="2" fill="#3b82f6" fillOpacity="0.3" className="stroke-blue-500 [html.light_&]:fill-blue-100 [html.light_&]:stroke-blue-600 [html.light_&]:fill-opacity-90" strokeWidth="1.5" />
              <circle cx="160" cy="40" r="4.5" fill="#ef4444" className="animate-pulse [html.light_&]:fill-red-650" />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary [html.light_&]:text-emerald-900 border-t border-border-subtle pt-3">
              <span>FPS: 60</span>
              <span>FLOW RATE: 24/MIN</span>
            </div>
          </div>
        </div>
      );
    case "receipt-processing":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/20 to-neutral-900/40 [html.light_&]:from-violet-100/40 [html.light_&]:to-neutral-200/40 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-10 [html.light_&]:opacity-25 bg-[linear-gradient(to_right,#8b5cf6_1.5px,transparent_1.5px)] [html.light_&]:bg-[linear-gradient(to_right,#6d28d9_1.5px,transparent_1.5px)] bg-[size:32px_32px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-violet-500/20 [html.light_&]:border-violet-300 rounded-xl p-6 bg-surface-secondary/40 [html.light_&]:bg-white/80 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-violet-400 [html.light_&]:text-violet-850 font-bold">AWS TEXTRACT PIPELINE</span>
              <span className="text-[10px] font-mono text-violet-500 bg-violet-500/10 [html.light_&]:text-violet-800 [html.light_&]:bg-violet-100 px-2 py-0.5 rounded font-bold">COMPLETED</span>
            </div>
            {/* Receipt schema abstract mock */}
            <div className="flex flex-col gap-2.5 my-2 w-full opacity-70 [html.light_&]:opacity-100">
              <div className="h-2.5 bg-violet-500/20 [html.light_&]:bg-violet-600/30 rounded w-1/3" />
              <div className="h-2 bg-text-secondary/20 [html.light_&]:bg-slate-300 rounded w-full" />
              <div className="h-2 bg-text-secondary/20 [html.light_&]:bg-slate-300 rounded w-5/6" />
              <div className="h-2 bg-text-secondary/20 [html.light_&]:bg-slate-300 rounded w-4/5" />
              <div className="h-3.5 bg-violet-500/25 [html.light_&]:bg-violet-600/40 rounded w-1/4 self-end mt-2" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary [html.light_&]:text-violet-900 border-t border-border-subtle pt-3">
              <span>MATCHING: 99.1%</span>
              <span>STATUS: JSON_OK</span>
            </div>
          </div>
        </div>
      );
    case "internal-developer-platform":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 to-slate-900/40 [html.light_&]:from-blue-100/40 [html.light_&]:to-slate-200/40 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="relative w-full h-full flex flex-col justify-between border border-blue-500/20 [html.light_&]:border-blue-300 rounded-xl p-6 bg-surface-secondary/40 [html.light_&]:bg-white/80 backdrop-blur-sm font-mono text-[9px] text-blue-400 [html.light_&]:text-slate-800">
            <div className="flex justify-between items-center border-b border-border-subtle pb-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50 [html.light_&]:bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 [html.light_&]:bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50 [html.light_&]:bg-green-500" />
              </div>
              <span className="text-text-secondary [html.light_&]:text-blue-800 font-bold">dev-portal-v2</span>
            </div>
            <div className="flex flex-col gap-2 my-2 text-left">
              <span>$ npm run deploy --prod</span>
              <span className="text-emerald-400 [html.light_&]:text-emerald-700 font-bold">&gt; Building container layers... [Done]</span>
              <span className="text-text-secondary [html.light_&]:text-slate-500">&gt; Injecting variables... [Ok]</span>
              <span className="text-blue-500 [html.light_&]:text-indigo-600 font-bold">&gt; Routing active SSL...</span>
            </div>
            <div className="flex justify-between text-text-secondary [html.light_&]:text-blue-900 border-t border-border-subtle pt-2">
              <span>DOCKER STATUS: UP</span>
              <span>CPU: 4.8%</span>
            </div>
          </div>
        </div>
      );
    case "iot-monitoring":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 to-slate-900/40 [html.light_&]:from-cyan-100/40 [html.light_&]:to-slate-200/40 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-15 [html.light_&]:opacity-30 bg-[radial-gradient(#06b6d4_1.5px,transparent_1.5px)] [html.light_&]:bg-[radial-gradient(#0891b2_1.5px,transparent_1.5px)] bg-[size:20px_20px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-cyan-500/20 [html.light_&]:border-cyan-300 rounded-xl p-6 bg-surface-secondary/40 [html.light_&]:bg-white/80 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 [html.light_&]:text-cyan-850 font-bold">SENSOR: ESP32_GRID_04</span>
              <span className="text-[10px] font-mono text-cyan-500 bg-cyan-500/10 [html.light_&]:text-cyan-800 [html.light_&]:bg-cyan-100 px-2 py-0.5 rounded font-bold">CONNECTED</span>
            </div>
            {/* Dynamic waveform mock */}
            <svg viewBox="0 0 200 60" className="w-full h-1/2 opacity-80 [html.light_&]:opacity-100 my-2">
              <path d="M 0,30 Q 15,10 30,30 T 60,30 T 90,30 T 120,45 T 150,15 T 180,30 T 200,30" fill="none" stroke="#06b6d4" className="[html.light_&]:stroke-cyan-700" strokeWidth="3" />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary [html.light_&]:text-cyan-905 border-t border-border-subtle pt-3">
              <span>TEMP: 42.5°C</span>
              <span>VIB: NORMAL</span>
            </div>
          </div>
        </div>
      );
    case "ss-agencies":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 to-slate-900/40 [html.light_&]:from-indigo-100/40 [html.light_&]:to-slate-200/40 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-10 [html.light_&]:opacity-25 bg-[radial-gradient(#6366f1_1.5px,transparent_1.5px)] [html.light_&]:bg-[radial-gradient(#4338ca_1.5px,transparent_1.5px)] bg-[size:24px_24px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-indigo-500/20 [html.light_&]:border-indigo-300 rounded-xl p-6 bg-surface-secondary/40 [html.light_&]:bg-white/80 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-indigo-400 [html.light_&]:text-indigo-850 font-bold">BILLING APPLICATION</span>
              <span className="text-[10px] font-mono text-indigo-500 bg-indigo-500/10 [html.light_&]:text-indigo-800 [html.light_&]:bg-indigo-100 px-2 py-0.5 rounded font-bold">PRODUCTION LIVE</span>
            </div>
            {/* Abstract Payment Card representation */}
            <div className="w-56 h-28 border border-indigo-500/30 [html.light_&]:border-indigo-400/50 rounded-xl p-4 self-center bg-gradient-to-br from-indigo-900/20 to-slate-900/40 [html.light_&]:from-indigo-600 [html.light_&]:to-indigo-900 backdrop-blur flex flex-col justify-between text-left shadow-md">
              <div className="flex justify-between items-start">
                <div className="w-8 h-6 bg-indigo-500/20 [html.light_&]:bg-white/20 rounded" />
                <span className="text-[8px] font-mono text-indigo-400 [html.light_&]:text-indigo-200 font-bold">SS PLATFORM</span>
              </div>
              <div className="text-sm font-mono tracking-[0.1em] text-white">•••• •••• •••• 8840</div>
              <div className="flex justify-between text-[8px] font-mono text-text-secondary [html.light_&]:text-indigo-200/85">
                <span>VAL: 12/28</span>
                <span>PCI SECURE</span>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary [html.light_&]:text-indigo-900 border-t border-border-subtle pt-3">
              <span>VOL: ₹12.4Cr</span>
              <span>LATENCY: 120MS</span>
            </div>
          </div>
        </div>
      );
    case "direct-market-access":
    default:
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/20 to-neutral-900/40 [html.light_&]:from-orange-100/40 [html.light_&]:to-neutral-200/40 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-10 [html.light_&]:opacity-20 bg-[linear-gradient(to_bottom,#f97316_1.5px,transparent_1.5px)] [html.light_&]:bg-[linear-gradient(to_bottom,#c2410c_1.5px,transparent_1.5px)] bg-[size:100%_12px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-orange-500/20 [html.light_&]:border-orange-300 rounded-xl p-6 bg-surface-secondary/40 [html.light_&]:bg-white/80 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-orange-400 [html.light_&]:text-orange-850 font-bold">PROGRESSIVE WEB APP</span>
              <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 [html.light_&]:text-orange-800 [html.light_&]:bg-orange-100 px-2 py-0.5 rounded font-bold">OFFLINE ENABLED</span>
            </div>
            {/* Agriculture market layout abstract */}
            <div className="grid grid-cols-2 gap-3 my-2 w-full">
              <div className="border border-border-subtle [html.light_&]:border-orange-200 p-2 rounded flex flex-col gap-1 bg-background/50 [html.light_&]:bg-white shadow-sm">
                <div className="w-6 h-6 rounded bg-orange-500/20 [html.light_&]:bg-orange-500/10" />
                <div className="h-1.5 bg-text-secondary/20 [html.light_&]:bg-slate-200 rounded w-4/5" />
                <div className="h-2 bg-orange-500/30 [html.light_&]:bg-orange-500 rounded w-1/2" />
              </div>
              <div className="border border-border-subtle [html.light_&]:border-emerald-200 p-2 rounded flex flex-col gap-1 bg-background/50 [html.light_&]:bg-white shadow-sm">
                <div className="w-6 h-6 rounded bg-emerald-500/20 [html.light_&]:bg-emerald-500/10" />
                <div className="h-1.5 bg-text-secondary/20 [html.light_&]:bg-slate-200 rounded w-4/5" />
                <div className="h-2 bg-emerald-500/30 [html.light_&]:bg-emerald-500 rounded w-1/2" />
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary [html.light_&]:text-orange-900 border-t border-border-subtle pt-3">
              <span>LATENCY: 85MS</span>
              <span>SYNC: OK</span>
            </div>
          </div>
        </div>
      );
  }
};
