import React from "react";

interface ProjectPreviewProps {
  id: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ id }) => {
  switch (id) {
    case "smart-traffic":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 to-slate-900/40 [html.light_&]:from-emerald-50/80 [html.light_&]:to-slate-100/80 flex items-center justify-center p-8 overflow-hidden select-none">
          {/* Abstract Traffic Grid overlay */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [html.light_&]:bg-[radial-gradient(#059669_1px,transparent_1px)] bg-[size:16px_16px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-emerald-500/20 [html.light_&]:border-emerald-200/60 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 [html.light_&]:text-emerald-700">DETECTING: VEHICLE</span>
              <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 [html.light_&]:text-emerald-700 [html.light_&]:bg-emerald-100 px-2 py-0.5 rounded">LIVE FEEDS</span>
            </div>
            {/* SVG traffic simulation mockup */}
            <svg viewBox="0 0 200 80" className="w-full h-1/2 opacity-70 my-2">
              <line x1="10" y1="40" x2="190" y2="40" className="stroke-slate-700 [html.light_&]:stroke-slate-300" strokeWidth="2" strokeDasharray="4 4" />
              <rect x="30" y="30" width="20" height="12" rx="2" fill="#10b981" fillOpacity="0.4" className="stroke-emerald-500 [html.light_&]:fill-emerald-600 [html.light_&]:stroke-emerald-600" strokeWidth="1" />
              <rect x="90" y="38" width="25" height="12" rx="2" fill="#3b82f6" fillOpacity="0.3" className="stroke-blue-500 [html.light_&]:fill-blue-600 [html.light_&]:stroke-blue-600" strokeWidth="1" />
              <circle cx="160" cy="40" r="4" fill="#ef4444" className="animate-pulse [html.light_&]:fill-red-650" />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
              <span>FPS: 60</span>
              <span>FLOW RATE: 24/MIN</span>
            </div>
          </div>
        </div>
      );
    case "receipt-processing":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/20 to-neutral-900/40 [html.light_&]:from-violet-50/80 [html.light_&]:to-neutral-100/80 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px)] [html.light_&]:bg-[linear-gradient(to_right,#7c3aed_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-violet-500/20 [html.light_&]:border-violet-200/60 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-violet-400 [html.light_&]:text-violet-700">AWS TEXTRACT PIPELINE</span>
              <span className="text-[10px] font-mono text-violet-500 bg-violet-500/10 [html.light_&]:text-violet-700 [html.light_&]:bg-violet-100 px-2 py-0.5 rounded">COMPLETED</span>
            </div>
            {/* Receipt schema abstract mock */}
            <div className="flex flex-col gap-2 my-2 w-full opacity-60">
              <div className="h-2 bg-violet-500/20 [html.light_&]:bg-violet-600/15 rounded w-1/3" />
              <div className="h-1.5 bg-text-secondary/20 rounded w-full" />
              <div className="h-1.5 bg-text-secondary/20 rounded w-5/6" />
              <div className="h-1.5 bg-text-secondary/20 rounded w-4/5" />
              <div className="h-3 bg-violet-500/25 [html.light_&]:bg-violet-600/20 rounded w-1/4 self-end mt-2" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
              <span>MATCHING: 99.1%</span>
              <span>STATUS: JSON_OK</span>
            </div>
          </div>
        </div>
      );
    case "internal-developer-platform":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 to-slate-900/40 [html.light_&]:from-blue-50/80 [html.light_&]:to-slate-100/80 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="relative w-full h-full flex flex-col justify-between border border-blue-500/20 [html.light_&]:border-blue-200/60 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm font-mono text-[9px] text-blue-400 [html.light_&]:text-blue-700">
            <div className="flex justify-between items-center border-b border-border-subtle pb-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="text-text-secondary">dev-portal-v2</span>
            </div>
            <div className="flex flex-col gap-1.5 my-2">
              <span>$ npm run deploy --prod</span>
              <span className="text-emerald-400 [html.light_&]:text-emerald-700">&gt; Building container layers... [Done]</span>
              <span className="text-text-secondary">&gt; Injecting variables... [Ok]</span>
              <span className="text-blue-500 [html.light_&]:text-blue-605">&gt; Routing active SSL...</span>
            </div>
            <div className="flex justify-between text-text-secondary border-t border-border-subtle pt-2">
              <span>DOCKER STATUS: UP</span>
              <span>CPU: 4.8%</span>
            </div>
          </div>
        </div>
      );
    case "iot-monitoring":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 to-slate-900/40 [html.light_&]:from-cyan-50/80 [html.light_&]:to-slate-100/80 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [html.light_&]:bg-[radial-gradient(#0891b2_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-cyan-500/20 [html.light_&]:border-cyan-200/60 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 [html.light_&]:text-cyan-700">SENSOR: ESP32_GRID_04</span>
              <span className="text-[10px] font-mono text-cyan-500 bg-cyan-500/10 [html.light_&]:text-cyan-700 [html.light_&]:bg-cyan-100 px-2 py-0.5 rounded">CONNECTED</span>
            </div>
            {/* Dynamic waveform mock */}
            <svg viewBox="0 0 200 60" className="w-full h-1/2 opacity-70 my-2">
              <path d="M 0,30 Q 15,10 30,30 T 60,30 T 90,30 T 120,45 T 150,15 T 180,30 T 200,30" fill="none" stroke="#06b6d4" className="[html.light_&]:stroke-cyan-600" strokeWidth="2.5" />
            </svg>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
              <span>TEMP: 42.5°C</span>
              <span>VIB: NORMAL</span>
            </div>
          </div>
        </div>
      );
    case "ss-agencies":
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 to-slate-900/40 [html.light_&]:from-indigo-50/80 [html.light_&]:to-slate-100/80 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [html.light_&]:bg-[radial-gradient(#4f46e5_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-indigo-500/20 [html.light_&]:border-indigo-200/60 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-indigo-400 [html.light_&]:text-indigo-700">BILLING APPLICATION</span>
              <span className="text-[10px] font-mono text-indigo-500 bg-indigo-500/10 [html.light_&]:text-indigo-700 [html.light_&]:bg-indigo-100 px-2 py-0.5 rounded">LIVE DEMO</span>
            </div>
            {/* Abstract Payment Card representation */}
            <div className="w-56 h-28 border border-indigo-500/30 [html.light_&]:border-indigo-200/60 rounded-xl p-4 self-center bg-gradient-to-br from-indigo-900/20 to-slate-900/40 [html.light_&]:from-indigo-50/80 [html.light_&]:to-slate-100/80 backdrop-blur flex flex-col justify-between text-left">
              <div className="flex justify-between items-start">
                <div className="w-8 h-6 bg-indigo-500/20 rounded" />
                <span className="text-[8px] font-mono text-indigo-400 [html.light_&]:text-indigo-700 font-bold">SS PLATFORM</span>
              </div>
              <div className="text-sm font-mono tracking-[0.1em] text-white [html.light_&]:text-slate-800">•••• •••• •••• 8840</div>
              <div className="flex justify-between text-[8px] font-mono text-text-secondary">
                <span>VAL: 12/28</span>
                <span>PCI SECURE</span>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
              <span>VOL: ₹12.4Cr</span>
              <span>LATENCY: 120MS</span>
            </div>
          </div>
        </div>
      );
    case "direct-market-access":
    default:
      return (
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/20 to-neutral-900/40 [html.light_&]:from-orange-50/80 [html.light_&]:to-neutral-100/80 flex items-center justify-center p-8 overflow-hidden select-none">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,#f97316_1px,transparent_1px)] [html.light_&]:bg-[linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:100%_12px]" />
          <div className="relative w-full h-full flex flex-col justify-between border border-orange-500/20 [html.light_&]:border-orange-200/60 rounded-xl p-6 bg-surface-secondary/40 backdrop-blur-sm">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-orange-400 [html.light_&]:text-orange-700">PROGRESSIVE WEB APP</span>
              <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 [html.light_&]:text-orange-700 [html.light_&]:bg-orange-100 px-2 py-0.5 rounded">OFFLINE ENABLED</span>
            </div>
            {/* Agriculture market layout abstract */}
            <div className="grid grid-cols-2 gap-3 my-2 w-full">
              <div className="border border-border-subtle p-2 rounded flex flex-col gap-1 bg-background/50 [html.light_&]:bg-surface/80">
                <div className="w-6 h-6 rounded bg-orange-500/20 [html.light_&]:bg-orange-100" />
                <div className="h-1.5 bg-text-secondary/20 rounded w-4/5" />
                <div className="h-2 bg-orange-500/30 [html.light_&]:bg-orange-600/30 rounded w-1/2" />
              </div>
              <div className="border border-border-subtle p-2 rounded flex flex-col gap-1 bg-background/50 [html.light_&]:bg-surface/80">
                <div className="w-6 h-6 rounded bg-emerald-500/20 [html.light_&]:bg-emerald-100" />
                <div className="h-1.5 bg-text-secondary/20 rounded w-4/5" />
                <div className="h-2 bg-emerald-500/30 [html.light_&]:bg-emerald-600/30 rounded w-1/2" />
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-text-secondary border-t border-border-subtle pt-3">
              <span>LATENCY: 85MS</span>
              <span>SYNC: OK</span>
            </div>
          </div>
        </div>
      );
  }
};
