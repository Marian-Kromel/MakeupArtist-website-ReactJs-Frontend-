import React from "react";
import "./style.css";
const Profile = () => {
  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title">
            <span> Artist </span> Info{" "}
          </h2>{" "}
          <ul className="profile-list">
            <li className="profile-item">
              <span> Name </span>
              Marian Kromel{" "}
            </li>{" "}
            <li className="profile-item">
              <span> Work Time </span>
              12AM - 12PM{" "}
            </li>{" "}
            <li className="profile-item">
              <span> Location </span>
              Obour City{" "}
            </li>{" "}
            <li className="profile-item">
              <span> Phone </span>
              4444 5555 6666{" "}
            </li>{" "}
            <li className="profile-item">
              <span> Email </span>
              Mariankromel22 @gmail.com{" "}
            </li>{" "}
            <li className="profile-item">
              <span> Website </span>{" "}
              <span className="web"> www.MakeupArtist.com </span>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="skills">
          <h2 className="skills-title">
            Some <span> skills </span>{" "}
          </h2>{" "}
          <p className="skills-desc">More information about the artist </p>{" "}
          <div className="bar">
            <span className="title"> Draw </span>{" "}
            <span className="perc"> 100 % </span>{" "}
            <div className="parent">
              <span className="sp1"> </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bar">
            <span className="title"> Makeup </span>{" "}
            <span className="perc"> 100 % </span>{" "}
            <div className="parent">
              <span className="sp1"> </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bar">
            <span className="title"> Design </span>{" "}
            <span className="perc"> 95 % </span>{" "}
            <div className="parent">
              <span className="sp2"> </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Profile;
