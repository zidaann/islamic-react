import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import App from '../../layouts/App';

export default function Show() {
   const [ready, setReady] = useState(false);
   const { nomor } = useParams();
   const [surah, setSurah] = useState([]);

   useEffect(() => {
      setReady(false);
      let getAyat = async () => {
         try {
            let response = await axios.get(`/api/surat/${nomor}`);
            // create capitalize on the first string
            let string = `${response.data.tempat_turun}`;
            let capitalizeString = () => {
               return string.charAt(0).toUpperCase() + string.slice(1);
            };
            response.data.tempat_turun = capitalizeString();
            // console.log(response.data);
            setSurah(response.data);
            setReady(true);
         } catch (error) {
            // setReady(true);
            alert('Gagal memuat data!');
         }
      };
      getAyat();
   }, [nomor]);

   if (!ready) {
      return (
         <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <div class='lds-dual-ring'></div>
         </div>
      );
   }
   return (
      <App title={surah.nama_latin}>
         <div className='container'>
            <div class='show'>
               <div class='col-md-10 show-body  p-4'>
                  <h1>{surah.nama} </h1>
                  <div class='show-desc  '>
                     <div class='show-desc-left '>
                        <h3>Nama</h3>
                        <h3>Nomor urut</h3>
                        <h3>Arti</h3>
                        <h3>Tempat turun</h3>
                        <h3>Jumlah ayat</h3>
                     </div>
                     <div class='show-desc-right '>
                        <h3>: {surah.nama_latin}</h3>
                        <h3>: {surah.nomor}</h3>
                        <h3>: {surah.arti}</h3>
                        <h3>: {surah.tempat_turun}</h3>
                        <h3>: {surah.jumlah_ayat} ayat</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className='col-md audio py-3 '>
               <div className='title'>Play Audio</div>
               <audio src={surah.audio} controls typeof='audio/mp3' />
            </div>
            {surah.ayat.map((item, index) => (
               <div className='show-surah' key={index}>
                  <div className='show-ayat'>
                     <h6>{item.nomor}</h6>
                     <div className='show-ayat-detail '>{item.ar}</div>
                     <h5>{item.idn}</h5>
                  </div>
               </div>
            ))}
         </div>
      </App>
   );
}
