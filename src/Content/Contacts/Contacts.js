import { Component } from 'react';

import ContactsView from './ContactsView'

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Orignal design',
      text: '905-908, Abhijeet-1, Mithakhali Six Roads, Ahmedabad 380006, Gujarat, India'
    };
  }

  render() {
    const { title, text } = this.state;
    return (
      <ContactsView  title = {title} text = {text}/>
    );
  }    
}
export default Contacts;

