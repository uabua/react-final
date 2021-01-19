import React, { useCallback, useEffect, useState } from "react";
import rocket_animation from "../../assets/rocket_animation.gif";

const Contact = () => {
    const [clicked, setClicked] = useState(false);
  
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
  
    const [canSubmit, setCanSubmit] = useState(false);
  
    const checkDisabled = useCallback(() => {
      if (
        fullName !== "" && email !== "" && phone !== "" && !fullNameError && !emailError && !phoneError
      ) {
        setCanSubmit(true);
      } else {
        setCanSubmit(false);
      }
    }, [fullName, email, phone, fullNameError, emailError, phoneError]);
  
    useEffect(() => {
      const fullNameRegex = /^[A-Za-z]+( [A-za-z]+)*$/;
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const phoneRegex = /^[0-9]+$/;
  
      checkDisabled();
  
      if (fullName === "") {
        setFullNameError(false);
      } else if (!fullNameRegex.test(fullName)) {
        setFullNameError(true);
      } else {
        setFullNameError(false);
      }
  
      if (email === "") {
        setEmailError(false);
      } else if (!emailRegex.test(email)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
  
      if (phone === "") {
        setPhoneError(false);
      } else if (!phoneRegex.test(phone)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    }, [
      fullName,
      email,
      phone,
      fullNameError,
      emailError,
      phoneError,
      checkDisabled,
    ]);
  
    const send = () => {
      setClicked(true);
    };
  
    return clicked ? (
      <div style={{ textAlign: "center" }}>
        <h2>Your message successfully sent!</h2>
        <img className="w-600" src={rocket_animation} alt="rocket animation" />
      </div>
    ) : (
      <form className="w-md-400 m-auto">
        <h1 style={{ textAlign: "center", marginTop: "37px" }}>
          Send me a message
        </h1>
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input className="form-control" id="full-name" placeholder="Full Name" value={fullName} onChange={(event) => setFullName(event.target.value)} type="text" required />
          {fullNameError ? 
            <p style={{ color: "red" }}> Please enter your full name. It must contains only letters and space between words.</p>
            : ""}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} type="text" required />
          {emailError ? (
            <p style={{ color: "red" }}>
              Please enter your email: example@example.com
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input className="form-control" id="phone" placeholder="Phone" value={phone} onChange={(event) => setPhone(event.target.value)} type="text" required />
          {phoneError ? (
            <p style={{ color: "red" }}>
              Please enter your phone. It must contains only numbers.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" placeholder="Message."></textarea>
        </div>
        <div>
          {!canSubmit ? (
            <button className="btn btn-lg active" id="send-button" disabled>
              Send🚀
            </button>
          ) : (
            <button className="btn btn-lg active" id="send-button" onClick={() => send()}>Send🚀</button>
          )}
        </div>
      </form>
    );
  };
  
  export default Contact;