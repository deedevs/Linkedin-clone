import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("David Codes is Back", "Top news - 9999 readers")}
      {newsArticle("Covid-19 Pandemic", "Top news - 7400 readers")}
      {newsArticle("Tesla is great", "Top news - 6000 readers")}
      {newsArticle("Is redux too good", "Top news - 5000 readers")}
      {newsArticle("Google is DOWN", "Top news - 4589 readers")}
    </div>
  );
}

export default Widgets;
