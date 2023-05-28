import React from "react";
import Section from "../../../HOC/Section";
import kk1 from "../../../assets/img/sanal1.png";

const Bank = () => {
  return (
    <Section id="bank">
      <div className="container pt-2 pb-5">
      <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span> </span>Banka Bilgileri
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto"></h6>
        </div>
        <div class="card-group">
          <div class="card">
            <img src={kk1} class="card-img-top" alt="..." style={{margin:"auto",display:"block",justifyContent:"center"}}></img>
            <div class="card-body">
              <h5 class="card-title">Banka Kartı</h5>
             
            </div>
            
          </div>
          <div class="card">
            <img src={kk1} class="card-img-top" alt="..." style={{margin:"auto",display:"block",justifyContent:"center"}}></img>
            <div class="card-body">
              <h5 class="card-title">Banka Kartı</h5>
              
            </div>
           
          </div>
          <div class="card">
            <img src={kk1} class="card-img-top" alt="..." style={{margin:"auto",display:"block",justifyContent:"center"}}></img>
            <div class="card-body">
              <h5 class="card-title">Banka Kartı</h5>
            </div>
            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Bank;
