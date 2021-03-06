import React from "react";
import '../../components/Clients/index.scss'

import clients1 from "../../assets/clients1.png";
import clients2 from "../../assets/clients2.png";
import clients3 from "../../assets/clients3.png";
import clients4 from "../../assets/clients4.png";
import clients5 from "../../assets/clients5.png";
import clients6 from "../../assets/clients6.png";
import clients7 from "../../assets/clients7.png";



export default function Clients() {
  const data = [clients1,clients2,clients3,clients4,clients5,clients6, clients7];
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}