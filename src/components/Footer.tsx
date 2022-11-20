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
          <div className={styles.menu}>
            <ul>
              <li>
                Home
              </li>
              <li>
                Your Benefits
              </li>
              <li>
                Our Process
              </li>
              <li>
                Our Work
              </li>
              <li>
                Testimonials
              </li>
              <li>
                Start a Project
              </li>
            </ul>
          </div>
          <div className={styles.sm}>
            <ul>
              <li><img src={facebook} alt="Facebook" /></li>
              <li><img src={twitter} alt="Twitter" /></li>
              <li><img src={instagram} alt="Instagram" /></li>
            </ul>
          </div>
        </div>
        <div className={styles.cont}>
          <div className={styles.year}>20XX Company</div>
          <div className={styles.misc}>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
