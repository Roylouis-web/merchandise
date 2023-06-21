import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thanks for reaching out to us!");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

    return (
      <div className="contact-page-container">
        <fieldset>
        <legend><h1>Contact Us</h1></legend>
        <form >
          <input type="text" placeholder="first name" />
          <br />
          <br />
          <input type="text" placeholder="last name" />
          <br />
          <br />
          <input type="email" placeholder="email" />
          <br />
          <br />
          <input type="tel" placeholder="phone" />
          <br />
          <br />
          <button type="button" onClick={handleClick}>Submit</button>
        </form>
        { message !== '' && <p style={{color: "white"}}>{message}</p> }
        </fieldset>
      </div>
    );
  };