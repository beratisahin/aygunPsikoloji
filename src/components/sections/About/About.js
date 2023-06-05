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
          <h6 className="section-subtitle mr-auto ml-auto">
            Ben Klinik Psikolog Hanife Aygün.Öncelikle akademik eğitimimden
            bahsetmek istiyorum.Psikoloji lisans eğitimimden sonra Klinik
            Psikoloji Yüksek Lisans eğitimimi tamamlayarak uzmanlığımı almış
            bulunmaktayım.Fakülte,hastane,amatem,huzurevi,sevgi evleri,
            rehabilitasyon merkezleri vb kurumlarda gerek zorunlu gerekse
            gönüllü tüm stajlarımı tamamladım.Bilişsel Davranışcı Terapi ekolü
            ile çalışmaktayım. Mesleki bilgi ve deneyimlerimi paylaşmak amaçlı
            bu sayfayı açmış bulunmaktayım. Kalplere dokunmak gayesi ile.
            <br />
            <br />
            Aygün psikoloji iş ve örgüt psikolojisi kapsamında kuruma ve kurum
            çalışanlarına yönelik danışmanlık ve eğitim çalışmaları
            gerçekleştirir.
            Aygün psikoloji kurumların talep ve ihtiyaçlarına
            yönelik farklı alanlarda eğitimler vermektedir. Kurum ve
            çalışanlarının gelişimi ve desteklenmesini temel alan eğitim ve
            atölye çalışmalarından bazılarının başlıkları şu şekildedir;
            <br/> 
            stres yönetimi öfke yönetimi kriz ve çatışma yönetimi ekip çalışması ekip
            için iletişim çalışanlar için psikolojik öz bakım
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
                  Samsun Vezirköprü ilçesinde doğan Uzman Klinik Psikolog Hanife
                  Aygün psikoloji lisans eğitimini Trabzon Avrasya
                  Üniversitesinde bitirdikten sonra İstanbul Üsküdar
                  Üniversitesi Klinik Psikoloji Yüksek Lisans eğitimine
                  başlamıştır.
                </p>
                <p>
                  Stajyerlik döneminde Panik Atak Bozukluğu, Yaygın Anksiyete
                  Bozukluğu, Psikoz, Obsesif Kompulsif Bozukluk, Majör Depresif
                  Bozukluk, Agorafobi, Travma Sonrası Stres Bozukluğu, Komplike
                  ve Ağır Yas, Öfke Kontrolü ve Majör Depresif Bozukluk konuları
                  başta olmak üzere farklı alanda çalışarak deneyim edinmiştir.
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
