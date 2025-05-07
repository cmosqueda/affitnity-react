import { useState, useEffect } from "react";

export default function DateComponent() {
  const [dayOfWeek, setDayOfWeek] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      // Use Intl.DateTimeFormat to extract date components
      const dayFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      });
      const monthFormatter = new Intl.DateTimeFormat("en-US", {
        month: "long",
      });
      const dateFormatter = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
      });
      const yearFormatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
      });

      // Update state with formatted values
      setDayOfWeek(dayFormatter.format(now));
      setMonth(monthFormatter.format(now));
      setDate(dateFormatter.format(now));
      setYear(yearFormatter.format(now));
    };

    // Update date every second
    const interval = setInterval(updateDate, 1000);

    // Initial date update
    updateDate();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <p className="font-dmsans text-[15px] font-medium text-snow-white md:text-lg lg:text-xl">
        <span className="">{dayOfWeek || "Loading..."},</span>{" "}
        <span className="">{month || "Loading..."}</span>{" "}
        <span className="">{date || "Loading..."}</span>,{" "}
        <span className="">{year || "Loading..."}</span>
      </p>
    </div>
  );
}
