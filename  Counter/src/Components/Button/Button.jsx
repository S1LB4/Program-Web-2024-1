import React from 'react';

export function Button({ onClick, awake }) {
  return (
    <button onClick={onClick}>
      {awake}
    </button>
  );
}