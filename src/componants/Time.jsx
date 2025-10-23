import React, { useEffect, useState } from "react";

const Time = ({ prayers , city }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity/03-09-2024?city=${city}&country=Egypt`
    )
      .then((response) => response.json())
      .then((data) => {
        setTime(data.data.timings);
      })
      .catch((error) => console.log(error));
  }, [city]);

  if (!time) {
    return <p>جاري تحميل مواقيت الصلاة...</p>;
  }
  return (
    <div>
      {prayers.map(({ key, name }) => (
        <div key={key} className="prayer">
          <p className="prayer-name">{name}</p>
          <p className="prayer-time">{time[key] || "..."}</p>
        </div>
      ))}
    </div>
  );
};

export default Time;
