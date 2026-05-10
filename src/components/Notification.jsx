'use client'

import { useState, useEffect } from "react";

export default function Notification({ state }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (state?.message) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state]);

  if (!isVisible || !state?.message) return null;

  return (
    <div className="transition-all duration-500 animate-in fade-in slide-in-from-top-2">
      {state.success === true ? (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center text-sm shadow-sm">
          {state.message}
        </div>
      ) : (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center text-sm shadow-sm">
          {state.message}
        </div>
      )}
    </div>
  );
}
