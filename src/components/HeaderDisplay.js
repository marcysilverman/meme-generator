import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/Header.css';

function HeaderDisplay({ img, header, headerColor, headerFont, footer, footerColor, footerFont, onChange }) {
  return (
    <>
    <header className={styles.header}>
      <h1>Meme Generator </h1> 
      <h2> Please upload an image first</h2>
      <div className={styles.display}>
        <TextControl name="header" text={header} color={headerColor} font={headerFont} onChange={onChange} />
        <TextControl name="footer" text={footer} color={footerColor} font={footerFont} onChange={onChange} />
        <input type="url" name="img" value={img} onChange={onChange} placeholder="IMAGE" />
      </div>
    </header>
    </>
  );
}

HeaderDisplay.propTypes = {
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  headerFont: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  footerFont: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

function TextControl({ name, text, color, font, onChange }) {
  return (
    <>
      <input type="text" name={name} value={text} onChange={onChange}/>
      <input type="color" name={`${name}Color`} value={color} onChange={onChange} />
      <input type="text" name={`${name}Font`} value={font} onChange={onChange} />
    </>
  );
}

TextControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default HeaderDisplay;
