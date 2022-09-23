import React from "react";
import "./Info.css";
import program from "../../assets/program.jpg";

export default function Info() {
  return (
    <>
      <div className="info-talos-container">
        <div className="background-white">
          <div className="title-info">Πληροφορίες για εμάς</div>
          <div className="details-container">
            <p>
              Στο πρόγραμμα του γυμναστηρίου μας περιλαμβάνεται:
              <ul>
                <li>Kick Boxing</li>
                <li>MMA</li>
                <li>Tae Kwon Do Kids</li>
                <li>MUAY THAI</li>
                <li>BOXING</li>
                <li>Ελεύθερη προπόνηση</li>
              </ul>
            </p>
            <div className="paragraph">
              <p>
                Άριστα εκπαιδευμένοι προπονητές είναι έτοιμοι να σας καθοδηγήσουν και να σας διδάξουν αναλυτικά τις τεχνικές για το άθλημα που σας ενδιαφέρει. Υπάρχουν διάφορα γκρουπ έτσι ώστε να
                μπορείτε να προπονείστε τις ώρες που σας βολεύει. Λειτουργεί και παιδικό τμήμα για παιδιά άνω των 12 ετών! Θα χαρούμε να σας γνωρίσουμε και να προπονηθούμε μαζί!
              </p>
            </div>
          </div>
          <div className="title">Το φετινό μας εβδομαδιαίο πρόγραμμα</div>

          <img className="program-img" alt="program" src={program} width={"1000"} />
          <div className="title prosfores">
            <a href="/pricing">
              Δείτε{" "}
              <a href="/pricing" id="edo">
                εδώ
              </a>{" "}
              τις χειμερινές μας προσφορές
            </a>
          </div>
          <div className="details-container">
            <p className="erotisi">Για οποιαδήποτε ερώτηση, είμαστε στη δίαθεση σου!</p>
          </div>
        </div>
      </div>
    </>
  );
}
