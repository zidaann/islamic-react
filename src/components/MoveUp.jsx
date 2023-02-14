import React from 'react';

export default function () {
   // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
   let btnScroll = document.getElementById('back-to-top');
   window.onscroll = function () {
      scrollFunction();
   };
   function scrollFunction() {
      if (
         document.body.scrollTop > 500 ||
         document.documentElement.scrollTop > 500
      ) {
         btnScroll.style.display = 'Block';
      } else {
         btnScroll.style.display = 'none';
      }
   }

   const handleScrollUp = (value) => {
      const element = document.getElementById('menu');
      element.scrollIntoView({ behavior: 'smooth' });
      // alert('hai');
   };

   return (
      <button
         className='moveUp '
         id={'back-to-top'}
         onClick={() => handleScrollUp('top')}
      >
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            class='bi bi-arrow-up'
            viewBox='0 0 20 20'
         >
            <path
               fill-rule='evenodd'
               d='M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z'
            />
         </svg>
      </button>
   );
}
