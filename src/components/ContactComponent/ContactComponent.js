import React from "react";
import "./ContactComponent.css";

export default function ContactComponent() {
  return (
    <div className="contact-container">
      <div className="form">
        <p className="title-contact">Επικοινώνησε μαζί μάς</p>
        <form action="https://public.herotofu.com/v1/ad0222b0-3aea-11ed-8ff6-d1ee553f3964" method="post">
          <div className="form-element">
            <label for="name">Ονομα:</label>
            <input name="Name" id="name" type="text" required placeholder="Όνομα" />
          </div>
          <div className="form-element">
            <label for="email">Email:</label>
            <input name="Email" id="email" type="email" required placeholder="email@example.com" />
          </div>
          <div className="form-element">
            <label for="message">Μήνυμα:</label>
            <textarea name="Message" id="message" type="message" required placeholder="Γεία σας..." rows="4" cols="50"></textarea>
            {/* <input name="Message" id="message" type="message" required placeholder="Γεία σας..." /> */}
          </div>
          <div>
            <button type="submit" className="submit-btn">
              <span className="text">Αποστολή!</span>
              <span>FIGHT!</span>
            </button>
          </div>
        </form>
        <p className="title-contact" id="no-under">
          Άλλοι τρόποι επικοινωνίας
        </p>
        <div className="row alt-contact">
          <p>
            Επικοινωνήστε μαζί μας μέσω email: <a href="mailto:talosfightclub@gmail.com">talosfightclub@gmail.com</a>
          </p>
          <p>
            Τηλεφωνήστε μας στο: <a href="tel:231 062 4577">231 062 4577</a>
          </p>
        </div>
      </div>
    </div>
  );
}
