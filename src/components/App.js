import React, { PureComponent } from 'react';
import HeaderDisplay from './HeaderDisplay';
export default class App extends PureComponent {
  state = {
    text: ''
  }
  handleClick = () => {
    console.log('button has been clicked');
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      console.log('hello');
    });
  };
  render() {
    const { text } = this.state;
    return (
    <>
    <HeaderDisplay text={text}  onChange={this.handleChange} />
    <img src="https://pics.me.me/when-you-see-a-surprised-pikachu-meme-in-4k-woww-37497086.png"/>
    <h2> {text} </h2>
    <button onClick={this.handleClick}> CLICK ME </button>
    </>
    );
  }
}
