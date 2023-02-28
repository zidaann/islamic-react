import React from 'react';
import App from '../layouts/App';
import '../index.css';
import { NavLink } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
   return (
      <App title={'Home'}>
         <div className='container px-4'>
            <section id='menu'>
               <div className='row d-flex justify-content-center align-items-center mt-5'>
                  <div className='col-md-5 col-sm-12 mb-3'>
                     <NavLink
                        to={'/quran/surah'}
                        className={'text-decoration-none text-dark'}
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
                     <NavLink
                        to={'#'}
                        className={'text-decoration-none text-dark'}
                     >
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
                     <NavLink
                        to={'#'}
                        className={'text-decoration-none text-dark'}
                     >
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
                     <NavLink
                        to={'#'}
                        className={'text-decoration-none text-dark'}
                     >
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
