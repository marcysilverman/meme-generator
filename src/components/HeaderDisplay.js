import React from 'react';
import propTypes from 'prop-types';

function HeaderDisplay({ text, onChange }) {
  return (
    <input type="text" name="text" value={text} onChange={onChange}/>
  );
}

HeaderDisplay.propTypes = {
  text: propTypes.string,
  onChange: propTypes.func.isRequired,
};

export default HeaderDisplay;
