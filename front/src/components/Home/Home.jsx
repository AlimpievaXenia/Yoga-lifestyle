import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sections } from '../../data';
import { scrollTo } from '../../utils';
import './Home.css';

export default function Home() {
  const photos = useSelector(store => store.photos);

  return (
    <>
      <div className='photoOnMainPage'>
        <img src={photos.homepagePhoto?.[0].url} alt='...' className='mount' />
        <div className='textAboutYoga'><FormattedMessage id='quote' /></div>
        <div className='aboutBox'>
          <Link to={'/about'}>
            <div className="container">
              <div className="center">
                <button className="btn">
                  <svg width="225px" height="60px" viewBox="0 0 225 60" className="border buttonAbout">
                    <polyline points="224,1 224,59 1,59 1,1 224,1" className="bg-line" />
                    <polyline points="224,1 224,59 1,59 1,1 224,1" className="hl-line" />
                  </svg>
                  <span><FormattedMessage id='buttonAbout' /></span>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='navMenu'>
        {sections.map((section) => <Button onClick={() => scrollTo(section.id)} variant="text"><FormattedMessage id={'section_' + section.id} /></Button>)}
      </div>
      <div className='cardsList'>
        {sections.map((section, index) => {
          return <Link to={`/${section.id}`}>
            <Card sx={{ maxWidth: 1062 }} id={section.id} key={section.id} className="imgHome">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="1000"
                  image={photos.homepagePhoto?.[index + 1].url}
                  alt="..."
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='textInCard'>
                  <FormattedMessage id={'section_' + section.id} />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        })}
      </div>
    </>
  )
}
