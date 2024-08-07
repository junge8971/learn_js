import { memo, useEffect, useState } from "react";

export const Header = memo(() => {
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <h3>Title</h3>
      <span>Текущее время: {datetime.toString()}</span>
    </header>
  );
});

Header.displayName = "Header";
