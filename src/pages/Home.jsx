import React from 'react';
import App from '../layouts/App';
import '../index.css';
import { NavLink } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
   return (
      <App title={'Home'}>
         <div className='container px-4'>
            {/* <div className='hero'>
               <div className='row'>
                  <div className='col-md-5 col-sm-12 '>
                     <img src={require('../img/quran.jpg')} alt='pic' />
                     <div className='black-screen'></div>
                  </div>
                  <div className='desc'>
                     <h1>
                        Mari Kita Tingkatkan Keimanan dan Ketaqwaan Kepada Allah
                        SWT
                     </h1>
                     <p class='mt-3'>
                        Sebagaimana dalam Al-Quran Surah Ali Imran Ayat 102
                        <span className='d-block pt-2 '>
                           يٰۤـاَيُّهَا الَّذِيْنَ اٰمَنُوْا اتَّقُوا اللّٰهَ
                           حَقَّ تُقٰتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَ نْـتُمْ
                           مُّسْلِمُوْنَ
                        </span>
                        <span className='d-block pt-2'>
                           Artinya: "Wahai orang-orang yang beriman! Bertakwalah
                           kepada Allah <br /> sebenar-benar takwa kepadanya dan
                           janganlah kamu mati kecuali dalam keadaan muslim".
                        </span>
                     </p>
                  </div>
               </div>
            </div> */}

            <section id='menu'>
               <div className='row d-flex justify-content-center align-items-center mt-5'>
                  <div className='col-md-5 col-sm-12 mb-3'>
                     <NavLink
                        to={'/quran/surah'}
                        className={'text-decoration-none'}
                     >
                        <Card>
                           <img
                              src={require('../img/quran.png')}
                              width={50}
                              className='img-fluid'
                           />
                           <h5 className='pt-2'>Al-Quran</h5>
                        </Card>
                     </NavLink>
                  </div>
                  <div className='col-md-5 col-sm-12 mb-3'>
                     <NavLink to={'#'} className={'text-decoration-none'}>
                        <Card>
                           <img
                              src={require('../img/praying.png')}
                              width={50}
                              className='img-fluid'
                           />
                           <h5 className='pt-2'>Doa Harian</h5>
                        </Card>
                     </NavLink>
                  </div>
                  <div className='col-md-5 col-sm-12 mb-3'>
                     <NavLink to={'#'} className={'text-decoration-none'}>
                        <Card>
                           <img
                              src={require('../img/shalat.png')}
                              width={50}
                              className='img-fluid'
                           />
                           <h5 className='pt-2'>Bacaan Shalat</h5>
                        </Card>
                     </NavLink>
                  </div>
                  <div className='col-md-5 col-sm-12 mb-3'>
                     <NavLink to={'#'} className={'text-decoration-none'}>
                        <Card>
                           <img
                              src={require('../img/hadits.png')}
                              width={50}
                              className='img-fluid'
                           />
                           <h5 className='pt-2'>Hadits Nabi</h5>
                        </Card>
                     </NavLink>
                  </div>
               </div>
            </section>
         </div>
      </App>
   );
}
