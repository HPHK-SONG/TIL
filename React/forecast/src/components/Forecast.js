import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

import "./Forecast.css";

const Forecast = ({ forecast, unit }) => {
  const cut = forecast.list.slice(0, 10);
  const getHoursName = h => {
    return h > 12 ? `오후 ${h - 12}시` : `오전 ${h}시`;
  };
  const data = cut.map(e => {
    return {
      time: `${getHoursName(new Date(e.dt * 1000).getHours())}`,
      기온:
        unit === "c"
          ? Math.round(e.main.temp)
          : Math.round((e.main.temp * 9) / 5 + 32)
    };
  });

  const responsiveWidth = () => {
    const maxWidth = 500;
    const width = window.innerWidth - 10;
    return width > maxWidth ? maxWidth : width;
  };

  return (
    <div className="forecast">
      <LineChart width={responsiveWidth()} height={200} data={data}>
        <Line type="monotone" dataKey="기온" />
        <XAxis dataKey="time" />
        <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Forecast;
