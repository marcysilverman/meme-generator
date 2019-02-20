import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileSaver from 'file-saver';
import styles from './App.css';
import domToImage from 'dom-to-image';

export default class ImageForm extends PureComponent {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  static propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired
  };

  saveFile = () => {
    event.preventDefault();
    domToImage.toPng(this.imageRef.current)
      .then(img => {
        fileSaver.saveAs(img);
      });
  };
  render() {
    return (
    <>
     <div ref={this.imageRef}>
       <h2 className={styles.h2}> {this.props.text} </h2>
       <img src={this.props.img}></img>
       <h2 className={styles.h2}> {this.props.footer} </h2> 
     </div>
    <button onClick={this.saveFile}>Save File</button>
    </>
    );
  }
}
