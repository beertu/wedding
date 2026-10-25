"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Prevent SSR hydration mismatch
  if (!isMounted) return null;

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <h3 className="text-emerald-900 font-serif italic text-lg mb-4 text-center">
        Counting down to our special day
      </h3>
      <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
        <div className="bg-white/80 backdrop-blur-md p-3 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm">
          <span className="block text-2xl sm:text-4xl font-serif font-bold text-emerald-950">
            {timeLeft.days}
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-800 uppercase tracking-wider">
            Days
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-3 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm">
          <span className="block text-2xl sm:text-4xl font-serif font-bold text-emerald-950">
            {timeLeft.hours}
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-800 uppercase tracking-wider">
            Hours
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-3 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm">
          <span className="block text-2xl sm:text-4xl font-serif font-bold text-emerald-950">
            {timeLeft.minutes}
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-800 uppercase tracking-wider">
            Minutes
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-3 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm">
          <span className="block text-2xl sm:text-4xl font-serif font-bold text-emerald-950">
            {timeLeft.seconds}
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-800 uppercase tracking-wider">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
}