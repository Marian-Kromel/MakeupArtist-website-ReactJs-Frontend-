import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import {
  HomeSection,
  HomeInformation,
  // HomeTitle,
  // HomeInfo,
  // HomeDesc,
  // Span,
  HomeBtn,
} from "./style.js";

class Home extends Component {
  render() {
    return (
      <HomeSection>
        <div className="container">
          <HomeInformation>
            {" "}
            {/* <HomeTitle> The Center Of Attention </HomeTitle>{" "} */}{" "}
            {/* <HomeInfo> Make Your Face </HomeInfo>{" "} */}{" "}
            {/* <HomeDesc>
                        My love for <Span> makeup </Span>started young while often sneaking
                        into my mother's makeup vanity and playing with various shades of
                        lipstick, eyeshadows and blush.
                      </HomeDesc>{" "} */}{" "}
            <HomeBtn onClick={this.contact}> Contact us </HomeBtn>{" "}
          </HomeInformation>{" "}
        </div>{" "}
      </HomeSection>
    );
  }
}

export default Home;
