import React, { useState, useEffect } from "react";
import {
  WorkSection,
  WorkTitle,
  WorkList,
  WorkItem,
  Span,
  Overlay,
  OverlaySpan,
  ImageWrapper,
  Image,
} from "./style.js";
import axios from "axios";
const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);

  const PortfolioImages = images.map((imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan> Show Image </OverlaySpan>{" "}
        </Overlay>{" "}
      </ImageWrapper>
    );
  });

  return (
    <WorkSection>
      <WorkTitle>
        <Span> My </Span> Work{" "}
      </WorkTitle>{" "}
      <WorkList>
        <WorkItem active> All </WorkItem> <WorkItem> Wedding </WorkItem>{" "}
        <WorkItem> Party </WorkItem> <WorkItem> Creative </WorkItem>{" "}
        <WorkItem> Daily </WorkItem>{" "}
      </WorkList>{" "}
      <div className="box"> {PortfolioImages} </div>{" "}
    </WorkSection>
  );
};

export default Portfolio;
