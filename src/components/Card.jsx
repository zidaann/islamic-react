import React from 'react';
import '../index.css';
export default function Card(props) {
   return (
      <div className='card'>
         <div className='card-body text-center'>{props.children}</div>
      </div>
   );
}
