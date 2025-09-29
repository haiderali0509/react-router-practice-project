import React from "react";

function ContactForm() {
  return (
    <div>
      <form action="">
        <div className="inputBox">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="inputBox">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
