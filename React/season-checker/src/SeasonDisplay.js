import React from "react";

const getSeason = (month, lat) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "땀이 뻘뻘뻘",
    iconName: "sun"
  },
  winter: {
    text: "몸이 덜덜덜",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const season = getSeason(new Date().getMonth() + 1, props.lat);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className="season-display">
      <i className={`icon ${iconName} massive upper-left`} />
      <h1>{text}</h1>
      <i className={`icon ${iconName} massive bottom-right`} />
    </div>
  );
};

export default SeasonDisplay;
