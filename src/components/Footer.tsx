import React, { Component } from 'react'

import styles from '../modules/Footer.module.css';
import logo  from '../assets/logo.svg';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.cont}>
          <img src={logo} alt="" />
          <div className={styles.sm}>
            <ul>
              <li><img src={facebook} alt="Facebook" /></li>
              <li><img src={twitter} alt="Twitter" /></li>
              <li><img src={instagram} alt="Instagram" /></li>
            </ul>
          </div>
        </div>
        <div className={styles.cont}>
          <div className={styles.year}>This a demo landing page for demonstration purposes only. Design was inspired by <a href="https://dribbble.com/O2D" >Outline2Design</a>'s shot on dribbble found <a href="https://dribbble.com/shots/15221070-Digital-agency-landing-page-freebie">here</a></div>
          <div className={styles.year}>Logos were courstesy of <a href="https://logoipsum.com/">Logoipsum</a> By <a href="https://www.signalsupply.co/">Signal Supply</a></div>
        </div>
      </div>
    )
  }
}
