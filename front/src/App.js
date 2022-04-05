import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import { getUser } from '../src/redux/actions/userAC/userAC';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Inspiration from './components/Inspiration/Inspiration';
import Login from './components/Login/Login';
import PersonalCabinet from './components/PersonalCabinet/PersonalCabinet';
import Practices from './components/Practices/Practices';
import Registration from './components/Registration/Registration';
import Yoga from './components/Yoga/Yoga';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';
import { getPhotos } from '../src/redux/actions/photosAC/photosAC';

function App() {
  const dispatch = useDispatch();
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

  const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value)
    localStorage.setItem('locale', value)
  }

  function getInitialLocale() {
    const savedLocale = localStorage.getItem('locale');

    return savedLocale || LOCALES.ENGLISH
  }

  useEffect(() => {
    dispatch(getPhotos())
    dispatch(getUser())
  }, [])

  console.log(currentLocale, 'currentLocalecurrentLocale')
  return (
    <IntlProvider
      messages={messages[currentLocale]}
      key={currentLocale}
    >
      <div>
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cabinet' element={<PersonalCabinet />} />
          <Route path='/about' element={<About />} />
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/book' element={<Booking />} />
          <Route path='/practices' element={<Practices />} />
          <Route path='/inspiration' element={<Inspiration />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </IntlProvider >
  );
}

export default App;
