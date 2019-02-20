import React from 'react';
import propTypes from 'prop-types';

function HeaderDisplay({ text, onChange, img }) {
  return (
    <>
    <input type="text" name="text" value={text} onChange={onChange} placeholder="title"/>
    <input type="url" name="img" value={img} onChange={onChange} placeholder="image" />
    </>
  );
}

HeaderDisplay.propTypes = {
  img: propTypes.string,
  text: propTypes.string,
  onChange: propTypes.func.isRequired,
};

export default HeaderDisplay;
