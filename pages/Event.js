import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Video from '../components/Headervid';
import Partner from '../components/Partner';
function Event() {
    return (
      <>
        <Video videoUrl={'/videos/promotional.webm'} speech={""} btntxt={"Participate the event"} />
        <Cards />
        <Partner />
      </>
    );
  }
  
  export default Event;