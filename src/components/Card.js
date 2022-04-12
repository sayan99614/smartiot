import React from "react";

function Card(props) {
  let date = new Date().toString().split(" ");
  function getDay() {
    switch (new Date().getDay()) {
      case 0:
        return "SUNDAY";
      case 1:
        return "MONDAY";
      case 2:
        return "TUESDAY";
      case 3:
        return "WEDNESDAY";
      case 4:
        return "THURSDAY";
      case 5:
        return "FRIDAY";
      case 6:
        return "SATURDAY";
      default:
        return null;
    }
  }
  return (
    <div className="d-flex justify-content-around">
      <div className="d-flex justify-content-between">
        <div className="date">{date[2]}</div>
        <div className="d-flex flex-column">
          <div> {date[1]}</div>
        </div>
      </div>
      <div className="day">
        <span>&nbsp; </span>
        {getDay()}
      </div>
    </div>
  );
}

export default Card;
