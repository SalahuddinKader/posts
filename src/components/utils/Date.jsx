import React from "react";
import moment from "moment";
/**
 * Date Component
 * @prop {Number} date
 */
export const Date = ({ date }) => {
  return (
    <>
      <span>
        {moment.utc(date).format("D")}
        <sup>{moment.utc(date).format("Do").replace(/[0-9]/g, "")}</sup>
      </span>
      <span>{moment.utc(date).format("MMM")}</span>
    </>
  );
};
