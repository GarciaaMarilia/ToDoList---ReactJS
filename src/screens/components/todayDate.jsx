import React from "react";

const TodayDate = () => {
 const today = new Date();
 const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
 };
 const formattedDate = today.toLocaleDateString("en-US", options); 

 return (
  <h2 className="mb-4 font-bold text-size-custom">
   <strong>Today </strong>- {formattedDate}
  </h2>
 );
};

export default TodayDate;
