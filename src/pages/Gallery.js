import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Video from '../components/Headervid';
import Partner from '../components/Partner';
function Gallery() {
    return (
      <>
        <Video videoUrl={'/videos/gallery.mp4'} speech={""} btntxt={"Reserve Free Pratice"} />
        <Cards />
        <Partner />
      </>
    );
  }
  
  export default Gallery;