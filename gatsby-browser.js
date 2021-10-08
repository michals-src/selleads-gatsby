import React from 'react';
import ThemeContext from './src/context/ThemeContext';

export const wrapPageElement = ({ element }) => (
  <ThemeContext>{element}</ThemeContext>
)