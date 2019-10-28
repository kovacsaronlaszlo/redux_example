import React from 'react';
import PropsTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.PropsTypes = {
  active: PropsTypes.bool.isRequired,
  children: PropsTypes.node.isRequired,
  onClick: PropsTypes.func.isRequired
}

export default Link;