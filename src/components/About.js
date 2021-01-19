import React from 'react';

import CakeContainer from './CakeContainer';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamContainer from './IceCreamContainer';

function About() {
  console.log('hello about');
  return (
    <>
      <h1>About</h1>

      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
    </>
  )
}

export default About;