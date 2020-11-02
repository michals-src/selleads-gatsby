/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styles from '@styles/Home.module.css'
import '@styles/globals.css';
import '@styles/navigation.css';
import '@styles/cards.css';

import { Section1, Section2, Section3 } from '@sections/amazon';


export default function Home() {

  return (
    <div>


      <Section1 />
      <Section2 />
      <Section3 />
   
    </div>
  )
}
