import React from "react";

import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/ha4.PNG";

const about = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Vezirköprü </span>Aygün Psikoloji
          </h3>
          <p>Misyon olarak, Danışanlarımızın terapi uygulamalarına verdiği cevabı düzenli takip ederek kısa sürede maksimum düzeyde ve kalıcı iyileşme sağlamayı hedefliyoruz. </p>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h5 className="about-title">Hakkında</h5>
              <div className="about-description">
                <p>
                  Samsun Vezirköprü ilçesinde doğan Uzman Klinik Psikolog Hanife
                  Aygün psikoloji lisans eğitimini Trabzon Avrasya
                  Üniversitesi’nde bitirdikten sonra İstanbul Üsküdar
                  Üniversitesi Klinik Psikoloji Yüksek Lisans eğitimini
                  tamamlayarak uzman olmuştur. .
                </p>
                <p>
                Stajyerlik ve çalışma hayatı
                  boyunca: Akçaabat Haçkalı Baba Devlet Hastesi Psikiyatri
                  Servisi (Trabzon), Kanuni Eğitim ve Araştırma Hastanesi
                  Amatem (Trabzon), Gaziosmanpaşa Üniversitesi Psikiyatri
                  Servisi (Tokat),19 Mayıs Üniversitesi Psikiyatri
                  Servisi (Samsun), Np Beyin Hastanesi (İstanbul), sevgi evleri,
                  huzurevleri, rehabilitasyon merkezlerinde; panik atak
                  bozukları, yaygın anksiyete bozukluğu, bağımlık, psikoz,
                  nevroz, obsesif kompülsüf bozukluk, majör depresyon,
                  duygudurum bozuklukları, travma sonrası stres bozukluğu, yas,
                  ilişkisel problemler, uyku problemleri gibi birçok alanda
                  çalışarak deneyim edinmiştir
                </p>

                <a
                  href="https://tr.linkedin.com/in/hanife-ayg%C3%BCn-098584240"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary rounded-0 mr-2"
                >
                  Daha Fazla Bilgi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
