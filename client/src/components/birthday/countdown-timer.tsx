import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTargetDate = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Set birthday to August 14th
      let birthday = new Date(currentYear, 7, 14); // Month is 0-indexed, so 7 = August
      
      // If birthday has already passed this year, set to next year
      if (now > birthday) {
        birthday = new Date(currentYear + 1, 7, 14);
      }
      
      return birthday;
    };

    const targetDate = calculateTargetDate();

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        // Birthday has arrived!
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-dancing mb-4">Countdown to your birthday (August 14th):</h3>
      <div className="flex justify-center space-x-2 md:space-x-4 text-xl md:text-3xl font-bold">
        <div className="text-center">
          <div className="countdown-digit">{time.days.toString().padStart(2, "0")}</div>
          <div className="text-xs text-rose-gold">Days</div>
        </div>
        <div className="countdown-digit">:</div>
        <div className="text-center">
          <div className="countdown-digit">{time.hours.toString().padStart(2, "0")}</div>
          <div className="text-xs text-rose-gold">Hours</div>
        </div>
        <div className="countdown-digit">:</div>
        <div className="text-center">
          <div className="countdown-digit">{time.minutes.toString().padStart(2, "0")}</div>
          <div className="text-xs text-rose-gold">Minutes</div>
        </div>
        <div className="countdown-digit">:</div>
        <div className="text-center">
          <div className="countdown-digit">{time.seconds.toString().padStart(2, "0")}</div>
          <div className="text-xs text-rose-gold">Seconds</div>
        </div>
      </div>
    </div>
  );
}
