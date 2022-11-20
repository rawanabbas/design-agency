import React, { Component } from 'react'

import work from '../assets/work.png'

import styles from '../modules/Work.module.css'

export default class Work extends Component {
  render() {
    return (
      <div className={styles.work} id="work">
        <div className={styles.column}>
          <div className={styles.subtitle}>Start With Us</div>
          <div className={styles.title}>Start working faster today</div>
          <div className={styles.body}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam modi facilis officiis, quisquam culpa dolorem quae rerum laborum earum minima amet corporis nemo omnis cumque quaerat illo autem odio iure!</div>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.column}>
          <img src={work} alt="Work" />
        </div>
      </div>
    )
  }
}
