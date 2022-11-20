import React, { Component } from 'react'

import styles from '../modules/Hero.module.css'
import dashboard from '../assets/dashboard.png';

export default class Hero extends Component {
  render() {
    return (
      <div className={styles.hero} id="home">
        <div className={styles.content}>
          <div className={styles.title}>A Super Real Digital Agency</div>
          <div className={styles.subtitle}>We are super real and super creative</div>
          <button className={styles['action-btn']}>Get Started!</button>
          <img src={dashboard} className={styles.img} alt="Dashboard Sample" />
        </div>
        <div>
          <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className={styles.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
          </div>
      </div>
    )
  }
}
