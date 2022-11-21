import styled from "styled-components";
export const AboutSection = styled.div `
  height: 500px;
  background-image: url("images/homeimg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const AboutInfo = styled.div `
  padding-top: 30px;  
  padding-left:30px;
  padding-right:30px;
  width: 50%;
  float: left;
  background: white;
  height:270px; 
  position: relative; 
  left: 500px; 
  top: 190px;
  opacity: 70%;
`;

export const InfoTitle = styled.h2 `
  font-weight: bold; 
  font-size: 50px;
  margin: 10px 0;
`;

export const Span = styled.span `
  font-weight: normal; 
`;

export const InfoDir = styled.h4 `
  font-size: 40px; 
  color: #FF69B4;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const InfoDesc = styled.p `
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;

export const Anchor = styled.a `
  text-decoration: none;
`;