import React, { PureComponent } from 'react';
import HeaderDisplay from './HeaderDisplay';
import ImageForm from './ImageForm';
import styles from './css/App.css';


export default class App extends PureComponent {
  state = {
    img: '',
    footer: '',
    headerColor: '#000000',
    header: '',
    headerFont: 'cursive',
    footerColor: '#000000',
    footerFont: 'cursive'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
    });
  };
  render() {
    const {   
      header,
      headerColor,
      headerFont,
      footer,
      footerColor,
      footerFont,
      img } = this.state;
    return (
      <>
      <HeaderDisplay 
        className={styles} 
        onChange={this.handleChange}
        header={header}
        headerColor={headerColor}
        headerFont={headerFont}
        footer={footer}
        footerColor={footerColor}
        footerFont={footerFont} />
      {img && <ImageForm headerColor={headerColor} header={header} className={styles} footer={footer} img={img}/>}
    </>
    );
  }
}
