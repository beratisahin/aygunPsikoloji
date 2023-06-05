import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/aygun4.webp';

const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-users' />
              </div>
              <h4 className='facts-counter text-light'>257</h4>
              <h5 className='facts-title text-light'>Aktif Danışan</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-grin-beam' />
              </div>
              <h4 className='facts-counter text-light'>375</h4>
              <h5 className='facts-title text-light'>Mutlu Danışan</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-project-diagram' />
              </div>
              <h4 className='facts-counter text-light'>2520</h4>
              <h5 className='facts-title text-light'>Seans Saati</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-trophy' />
              </div>
              <h4 className='facts-counter text-light'>6</h4>
              <h5 className='facts-title text-light'>Makale</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
