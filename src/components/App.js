import React, { PureComponent } from 'react';
import HeaderDisplay from './HeaderDisplay';
import ImageForm from './ImageForm';


export default class App extends PureComponent {

  state = {
    text: '',
    img: '',
    footer: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      console.log('hello');
    });
  };
  render() {
    const { text, img, footer } = this.state;
    return (
      <>
      <HeaderDisplay onChange={this.handleChange} />
      {img && <ImageForm text={text} footer={footer} img={img}/>}
    </>
    );
  }
}
