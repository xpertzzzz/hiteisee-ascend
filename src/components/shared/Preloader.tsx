import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white pointer-events-none transition-opacity duration-500">
      <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
        {/* Logo - direct embed, no border */}
        <div className="mb-6">
          <img src="/logo/logo.png" alt="Hiteisee Consulting Logo" className="h-20 md:h-24 w-auto object-contain drop-shadow-sm" />
        </div>

        {/* Premium text */}
        <h2 className="text-xl md:text-2xl font-heading font-black text-slate-900 tracking-tight mb-2">
          HITEISEE <span className="text-primary">CONSULTING</span>
        </h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">
          Transformative Solutions
        </p>

        {/* Minimal Premium loading bar */}
        <div className="w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-primary rounded-full animate-[preload_1.2s_cubic-bezier(0.65,0,0.35,1)_forwards]" />
        </div>
      </div>

      <style>{`
        @keyframes preload {
          0% { width: 0%; opacity: 0; }
          10% { opacity: 1; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
