import React, { useState } from "react";
import "./PriceInfo.css";

export default function PriceInfo() {
  const [type, setType] = useState(true);
  return (
    <div className="price-info-container">
      <div className="pricing-container">
        <div className="title">Χειμερινή προσφορά!</div>

        <div className="buttons">
          <button className="button-28" onClick={() => setType(true)}>
            Μηνιαία Συνδρομή
          </button>
          <button className="button-28" onClick={() => setType(false)}>
            Ετήσια Συνδρομή
          </button>
        </div>

        <div className="prices">
          <a href="/contact">
            <div className="price">
              <div className="price-name">Βασική Συνδρομή</div>
              {type ? (
                <div className="money-container">
                  <p className="money">€35 </p>
                  <p>/ μήνα</p>
                </div>
              ) : (
                <div className="money-container">
                  <p className="money">€375 </p>
                  <p>/ έτος</p>
                </div>
              )}

              <div className="perks">
                <ul>
                  <li>Πρόσβαση στο γυμναστήριο</li>
                  <li>Συμμετοχή σε όλα τα αθλήματα</li>
                  <li>Πρόγραμμα διατροφής</li>
                  <li id="not-available">Προσωπικός Coach</li>
                  <li id="not-available">Δωρεάν συμμετοχή σε αγώνες στο τέλος κάθε μήνα</li>
                </ul>
              </div>
            </div>
          </a>

          <a href="/contact">
            <div className="price">
              <div className="price-name">Premium Συνδρομή</div>
              {type ? (
                <div className="money-container">
                  <p className="money">€55 </p>
                  <p>/ μήνα</p>
                </div>
              ) : (
                <div className="money-container">
                  <p className="money">€585 </p>
                  <p>/ έτος</p>
                </div>
              )}
              <div className="perks">
                <ul>
                  <li>Πρόσβαση στο γυμναστήριο</li>
                  <li>Συμμετοχή σε όλα τα αθλήματα</li>
                  <li>Πρόγραμμα διατροφής</li>
                  <li>Προσωπικός Coach</li>
                  <li>Δωρεάν συμμετοχή σε αγώνες στο τέλος κάθε μήνα</li>
                </ul>
              </div>
            </div>
          </a>

          <a href="/contact">
            <div className="price">
              <div className="price-name">
                1+1 Premium
                <p>
                  {"("}έλα με έναν φίλο σου{")"}
                </p>
              </div>
              {type ? (
                <div className="money-container">
                  <p className="money">€45 </p>
                  <p>/ μήνα</p>
                </div>
              ) : (
                <div className="money-container">
                  <p className="money">€495 </p>
                  <p>/ έτος</p>
                </div>
              )}
              <div className="perks">
                <ul>
                  <li>Πρόσβαση στο γυμναστήριο</li>
                  <li>Συμμετοχή σε όλα τα αθλήματα</li>
                  <li>Πρόγραμμα διατροφής</li>
                  <li>Προσωπικός Coach</li>
                  <li>Δωρεάν συμμετοχή σε αγώνες στο τέλος κάθε μήνα</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
