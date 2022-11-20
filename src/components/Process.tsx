import React, { Component } from 'react'

import search from '../assets/search.png'
import folder from '../assets/folder.png'
import document from '../assets/document.png'
import audit from '../assets/audit.png'
import tracking from '../assets/tracking.png'
import results from '../assets/results.png'

import styles from '../modules/Process.module.css'

export default class Process extends Component {
  render() {
    return (
      <div className={styles.process} id="process">
        <div className={styles.subtitle}>How it Works</div>
        <div className={styles.title}>Our Process</div>
        <div className={styles.text}>We know the best solution for all of your business ideas and we can help you solve all business problems</div>
        <div className={styles.card}>
          <div className={styles.card_column}>
            <img src={audit} alt="Business Audit" />
          </div>
          <div className={styles.card_column}>
            <img src={search} alt="Search" className={styles.card_icon}/>
            <div className={styles.card_title}>Business Audit</div>
            <div className={styles.card_body}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quos vitae inventore libero voluptatum! Unde tempora, eligendi qui quod vel maiores obcaecati praesentium id velit adipisci, nobis, ullam quibusdam consequatur!</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_column}>
            <img src={tracking} alt="Data Tracking" />
          </div>
          <div className={styles.card_column}>
            <img src={folder} alt="Folder" className={styles.card_icon}/>
            <div className={styles.card_title}>Data Tracking</div>
            <div className={styles.card_body}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quos vitae inventore libero voluptatum! Unde tempora, eligendi qui quod vel maiores obcaecati praesentium id velit adipisci, nobis, ullam quibusdam consequatur!</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_column}>
            <img src={results} alt="Results" />
          </div>
          <div className={styles.card_column}>
            <img src={document} alt="Document" className={styles.card_icon}/>
            <div className={styles.card_title}>Results</div>
            <div className={styles.card_body}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quos vitae inventore libero voluptatum! Unde tempora, eligendi qui quod vel maiores obcaecati praesentium id velit adipisci, nobis, ullam quibusdam consequatur!</div>
          </div>
        </div>
      </div>
    )
  }
}
