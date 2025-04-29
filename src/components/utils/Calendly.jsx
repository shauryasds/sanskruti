import React from "react";
import { PopupWidget } from "react-calendly";

export default function Calendly() {
  return (
    <div className="calendly-container">
      <PopupWidget
        url="https://calendly.com/shuklashauryadeep589/30min"
      
        rootElement={document.getElementById("root")}
        text="Schedule a Meeting!"
        textColor="#ffffff"
        color="#00a2ff"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055'
        }}
      />
    </div>
  );
}