import { useState } from 'react';
import introData from '../../Api/IntroArray';
import IntroView from './IntroView';

function Intro() {
  const [title] = useState('intro.title');
  const [brand] = useState('BMW-GT');

  return (
    <IntroView introData={introData} brand={brand} title={title} />
  );
}

export default Intro;
