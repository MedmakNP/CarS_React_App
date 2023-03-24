import { Component } from 'react';
import introData from '../Constants/IntroArray';
import IntroView from './IntroView';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'The All-New Series',
      brand: 'BMW-GT'
    };
  }

  render() {
    const { brand, title } = this.state;
    return (
      <IntroView introData={introData} brand={brand} title={title} />
    );
  }
}
export default Intro;
