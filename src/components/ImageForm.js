import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import fileSaver from 'file-saver';


export default class ImageForm extends PureComponent {
  static propTypes = {
    img: propTypes.string.isRequired
  };
  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  };
  render() {
    return (
    <>
    <img src={this.props.img} />
    <button onClick={this.saveFile}>Save File</button>
    </>
    );
  }
}
