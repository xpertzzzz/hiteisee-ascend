import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white pointer-events-none">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="bg-white rounded-2xl flex flex-col items-center justify-center shadow-md border border-blue-100 px-6 py-4 mb-6">
          <img src="/logo/logo.png" alt="Hiteisee Consulting Logo" className="h-16 md:h-20 w-auto object-contain" />
        </div>

        {/* Simple loading bar */}
        <div className="w-48 h-1 bg-blue-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[preload_0.8s_ease-out_forwards]" />
        </div>
      </div>

      <style>{`
        @keyframes preload {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
