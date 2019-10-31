import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Forecast = ({ forecast, unit }) => {
  const cut = forecast.list.slice(0, 10);
  const getHoursName = h => {
    return h > 12 ? `오후 ${h - 12}시` : `오전 ${h}시`;
  };
  return (
    <div className="forecast">
      <LineChart width={500} height={200} data={cut}>
        <Line type="monotone" dataKey="기온" />
        <XAxis dataKey="time" />
        <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
      </LineChart>
    </div>
  );
};

export default Forecast;
