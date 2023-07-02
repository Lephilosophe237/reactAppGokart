import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Video from '../components/Headervid';
import Partner from '../components/Partner';


function Home() {
  return (
    <>
      <Video videoUrl={'/videos/videoplayback.mp4'} speech={"What are you waiting for?"} btntxt={"GET Your Kart"} />
      <Cards />
      <Partner />
    </>
  );
}

export default Home;
