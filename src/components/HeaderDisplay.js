import React from 'react';
import propTypes from 'prop-types';
import styles from './Header.css';

function HeaderDisplay({ text, onChange, img, footer }) {
  return (
    <>
    <header className={styles.header}>
      <h1>Meme Generator </h1> 
      <div className={styles.display}>
        <input type="text" name="text" value={text} onChange={onChange} placeholder="header"/>
        <input type="text" name="footer" value={footer} onChange={onChange} placeholder="footer"/>
        <input type="url" name="img" value={img} onChange={onChange} placeholder="image" />
      </div>
    </header>
    </>
  );
}

HeaderDisplay.propTypes = {
  img: propTypes.string,
  text: propTypes.string,
  footer: propTypes.string,
  onChange: propTypes.func.isRequired
};

export default HeaderDisplay;
