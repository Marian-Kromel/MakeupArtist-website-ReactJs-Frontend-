import React from "react";
import {
  AboutSection,
  AboutInfo,
  InfoTitle,
  InfoDir,
  InfoDesc,
  Span,
} from "./style.js";

const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <AboutInfo>
          <InfoTitle> {/* <Span> This is </Span> Me{" "} */} </InfoTitle>{" "}
          <InfoDir> MAKEUP ARTIST </InfoDir>{" "}
          <InfoDesc>
            info info info info info info info info info info info info info{" "}
            <a href="#"> info </a> info info info info info info info info info
            info info info info info info info ?
          </InfoDesc>{" "}
          <InfoDesc>
            hjdbsk fkjshdcuf iueshdcgcdu hfwiudhdcb ksdhurhdf ckjs idfis dusfh
            aha5vb ds6mnbsdus{" "}
          </InfoDesc>{" "}
        </AboutInfo>{" "}
      </div>{" "}
    </AboutSection>
  );
};

export default About;
