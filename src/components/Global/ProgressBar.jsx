"use client"
import React from 'react';

const ProgressBar = ({ percentage }) => {
  const containerStyle = {
    width: '100%',
    height: '10px',
    border: '1px solid #fff',
    position: 'relative'
  };

  const filledStyle = {
    width: `${percentage}%`,
    height: '100%',
    backgroundColor: "#4A3AFF" ,
    transition: 'width 0.2s ease-in-out',
    borderRadius: '100px 0 0 100px'
  };

  const unfilledStyle = {
    width: `${100 - percentage}%`,
    height: '100%',
    backgroundColor: "#353940",
    position: 'absolute',
    right: '0',
    top: '0',
    borderRadius: '0 100px 100px 0'

  };

  return (
    <div style={containerStyle}>
      <div style={filledStyle}></div>
      <div style={unfilledStyle}></div>
    </div>
  );
};

export default ProgressBar;
