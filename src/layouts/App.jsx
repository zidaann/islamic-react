import React from 'react';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
export default function App(props) {
   document.title = props.title;
   return (
      <div>
         <Navigation />
         <Cover>{props.children}</Cover>
         <Footer />
      </div>
   );
}
