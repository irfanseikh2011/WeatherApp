import React from "react";
import dayjs from "dayjs";

function Date() {
  return <h6> {dayjs().format("DD MMMM, dddd")} </h6>;
}

export default Date;
