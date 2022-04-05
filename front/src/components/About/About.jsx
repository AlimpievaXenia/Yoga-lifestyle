import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import './About.css';


export default function About() {
  const photos = useSelector(store => store.photos);

  if (!photos.photoAbout) return null;

  const [dasha, cert1, cert2] = photos.photoAbout?.map((photo) => photo)

  return (
    <div className='pageAbout'>
      <div className='mainContent'>
        <img src={dasha.url} alt="..." className='photoAbout' />
        <div className='textOnPageAbout'>
          <div className='titleAboutMe'><FormattedMessage id='aboutMe' /></div>
          <div className='firstBlockTextAbout'><FormattedMessage id='aboutMeSecond' /></div>
          <div className='secondBlockTextAbout'><FormattedMessage id='aboutMeThird' /></div>
          <div className='thirdBlockTextAbout'><FormattedMessage id='aboutMeFourth' /></div>
          <div className='fourthBlockTextAbout'><FormattedMessage id='aboutMeFifth' /></div>
          <div className='fifthBlockTextAbout'><FormattedMessage id='aboutMeSix' /></div>
        </div>
      </div>
      <div className='certificates'>
        <img src={cert1.url} alt="..." className='cert1' />
        <img src={cert2.url} alt="..." className='cert2' />
      </div>
    </div>
  )
}
