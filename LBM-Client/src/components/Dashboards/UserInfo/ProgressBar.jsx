import React from "react";

export default function ProgressBar(props) {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 8,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 2,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};