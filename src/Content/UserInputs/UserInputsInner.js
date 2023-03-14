import { Component } from 'react';

class UserInputsInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elem: {
        fullname: { brand: '', model: '' },
        price: '',
        maxspeed: '',
        technicalData: ''
      }
    };
  }

  handleData = (evt) => {
    const { value, name } = evt.target;
    const { elem } = this.state;
    this.setState({
      elem: {
        ...elem,
        [name]: value,
      },
    });
  };

  render() {
        
  }
}
export default UserInputsInner;
