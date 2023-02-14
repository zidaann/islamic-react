import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MoveUp from '../../components/MoveUp';
import App from '../../layouts/App';

export default function Index() {
   const [search, setSearch] = useState('');
   const [datas, setDatas] = useState([]);

   useEffect(() => {
      const getSurah = async () => {
         const { data } = await axios.get(`/api/surat`);
         //  console.log(data);
         setDatas(data);
      };
      getSurah();
   }, []);

   return (
      <App title={'Al-Quran'}>
         <div className='container  ' id='menu'>
            <div className='jumbotron'>
               <div className='row d-flex justify-content-center align-items-center h-100'>
                  <div className='col-md-6 '>
                     <div className='col-md d-flex justify-content-center mb-4'>
                        <img
                           src={require('../../img/logo_quran.png')}
                           alt=''
                           width={150}
                           className='img-fluid'
                        />
                     </div>
                     <form className='d-flex align-items-center ' role='search'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='16'
                           height='16'
                           fill='currentColor'
                           class='bi bi-search'
                           viewBox='0 0 16 16'
                        >
                           <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                        </svg>
                        <input
                           className='form-control '
                           type='search'
                           placeholder='Search'
                           aria-label='Search'
                           id='keyword'
                           onChange={(e) => {
                              setSearch(e.target.value);
                           }}
                        />
                        {/* <button type='submit' id='tombol-cari' /> */}
                     </form>
                  </div>
               </div>
            </div>

            <div className='surah'>
               <div className='title'>Daftar Surah</div>
               <div className='surah-body'>
                  {/* search menggunakan filter 
                     pencarian berdasarkan nama_latin dan arti
                  */}
                  {datas
                     .filter((item) => {
                        return search.toLowerCase() === ''
                           ? item
                           : item.nama_latin.toLowerCase().includes(search) ||
                                item.arti.toLowerCase().includes(search);
                     })
                     .map((data, index) => (
                        <NavLink
                           to={`/quran/surah/${data.nomor}`}
                           id={'surah-detail'}
                           key={index}
                           className={'sub-title'}
                        >
                           <div className='box-surah'>
                              <div className='box-desc'>
                                 <div className='box-number'>
                                    <h6>{data.nomor}</h6>
                                 </div>
                                 <div className='box-body'>
                                    <div class='box-left'>
                                       <h2>{data.nama_latin}</h2>
                                       <h6>{data.arti}</h6>
                                    </div>
                                    <div class='box-right'>
                                       <h2>{data.nama} </h2>
                                       <h6>{data.jumlah_ayat} ayat</h6>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </NavLink>
                     ))}
               </div>
            </div>
            <MoveUp />
         </div>
      </App>
   );
}
