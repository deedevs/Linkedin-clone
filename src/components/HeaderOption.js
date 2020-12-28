import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && <Avatar className="headerOption-avatar" src={avatar} />}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
