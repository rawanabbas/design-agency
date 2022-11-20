import React, { Component } from 'react'

import styles from '../modules/Brands.module.css';
import company1 from '../assets/lc1.svg'
import company2 from '../assets/lc2.svg'
import company3 from '../assets/lc3.svg'
import company4 from '../assets/lc4.svg'
import company5 from '../assets/lc5.svg'
import company6 from '../assets/lc6.svg'
import company7 from '../assets/lc7.svg'
import company8 from '../assets/lc8.svg'
import company9 from '../assets/lc9.svg'
import company10 from '../assets/lc10.svg'

export default class Brands extends Component {
  render() {
    return (
      <div className={styles.brands} id="testimonials">
        <div className={styles.subtitle}>Brands</div>
        <div className={styles.title}>We work with thousands of the world’s leading brands</div>
        <div className={styles.companies}>
          <img src={company1} alt="Company 1" />
          <img src={company2} alt="Company 2" />
          <img src={company3} alt="Company 3" />
          <img src={company4} alt="Company 4" />
          <img src={company5} alt="Company 5" />
          <img src={company6} alt="Company 6" />
          <img src={company7} alt="Company 7" />
          <img src={company8} alt="Company 8" />
          <img src={company9} alt="Company 9" />
          <img src={company10} alt="Company 10" />
        </div>
        <div className={styles.text}>You are in good hands!</div>
      </div>
    )
  }
}
