import React from "react";
import './Requestform.scss';
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Textarea from "../../../components/Textarea/Textarea";



const Requestform = () => {
  return (
    <section className="requestform">
      <div className="container requestform__container">
        <h3 className="requestform__title">
          Want to know more? Ask us a question:
        </h3>
        <form className="requestform__form" action="#">
          <Input
            id = "requestform__input-name"
            placeholder = "Your name"
            type = "text"
            length = "default"
            color = "light"
            label= "Name"
          />
          <Input
            id = "requestform__input-phone"
            placeholder = "Your phone"
            type = "text"
            length = "default"
            color = "light"
            label= "Phone"
          />

          <Textarea
            id = "requestform__textarea-message"
            placeholder = "Your message"
            length = "default"
            color = "light"
            rows = "1"
            label= "Message"
          />


          <Button
            title='Send'
            type='submit'
            color='primary'
            length='regular'
          />
        </form>
      </div> {/*requestform__container*/}
    </section>
  )
};

export default Requestform