import React, { PureComponent } from 'react';
import HeaderDisplay from './HeaderDisplay';
import ImageForm from './ImageForm';


export default class App extends PureComponent {
  state = {
    text: '',
    img: ''
  }
  handleClick = () => {
    console.log('button has been clicked');
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      console.log('hello');
    });
  };

  // handleImage =({ target }) => {
  //   this.setState({ [target.name]: target.value}, () => {
  //     console.log('image has been targeted');
  //   })
  // }
  render() {
    const { text, img } = this.state;
    return (
    <>
    { img && <ImageForm img={img}/>}
    <HeaderDisplay text={text}  onChange={this.handleChange} />
    <h2> {text} </h2>
    <button onClick={this.handleClick}> CLICK ME </button>
    </>
    );
  }
}
