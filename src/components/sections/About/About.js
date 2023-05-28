import React from "react";

import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/about.jpg";

const about = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Company
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">Hakkında</h3>
              <div className="about-description">
                <p>
                  Samsun Vezirköprü ilçesinde doğan Uzman Klinik Psikolog Hanife Aygün
                  psikoloji lisans eğitimini Trabzon Avrasya Üniversitesinde
                  bitirdikten sonra İstanbul Üsküdar Üniversitesi Klinik
                  Psikoloji Yüksek Lisans eğitimine başlamıştır.
                </p>
                <p>
                  Stajyerlik döneminde Panik Atak Bozukluğu, Yaygın Anksiyete
                  Bozukluğu, Psikoz, Obsesif Kompulsif Bozukluk, Majör Depresif
                  Bozukluk, Agorafobi, Travma Sonrası Stres Bozukluğu, Komplike
                  ve Ağır Yas, Öfke Kontrolü ve Majör Depresif Bozukluk konuları
                  başta olmak üzere farklı alanda çalışarak deneyim edinmiştir.
                </p>

                <button className="btn btn-primary rounded-0">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
