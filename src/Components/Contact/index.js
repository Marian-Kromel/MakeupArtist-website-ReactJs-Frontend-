import React, { Fragment } from "react";
import {
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSubmit,
} from "./style.js";

import Footer from "./../Footer";
const Contact = () => {
  return (
    <Fragment>
      <ContactSection>
        <div className="container">
          <ContactTitle>
            <Span> CONTACT </Span> US
          </ContactTitle>
          <Form action="">
            <FormInput>
              <InputText type="text" placeholder="Enter Your Name Here.." />
              <InputEmail type="email" placeholder="Enter Your Email Here.." />
            </FormInput>
            <InputExp type="text" className="sub" placeholder="Enter Subject" />
            <TextArea rows="10" placeholder="Enter Message "></TextArea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </Fragment>
  );
};

export default Contact;
