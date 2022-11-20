import React from 'react'
import chart from '../assets/chart.svg'
import discount from '../assets/discount.svg'
import user from '../assets/user.svg'
import search from '../assets/search-1.svg'
import graph from '../assets/graph.svg'
import bag from '../assets/bag.svg'

import styles from '../modules/Info.module.css'

export default function Info() {
  return (
    <div className={styles.info} id="info">
    <div className={styles.header}>
      Features
    </div>
    <div className={styles.title}>
      We are here to help you with
    </div>
    <div className={styles['cards-container']}>
        <div className={styles.card}>
          <img src={chart} alt="Chart" />
          <div className={styles.card_title}>Grow your business</div>
          <div className={styles.card_body}>The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</div>
        </div>
        <div className={styles.card}>
          <img src={discount} alt="Discount" />
          <div className={styles.card_title}>Grow your business</div>
          <div className={styles.card_body}>The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</div>
        </div>
        <div className={styles.card}>
          <img src={user} alt="User" />
          <div className={styles.card_title}>Grow your business</div>
          <div className={styles.card_body}>The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</div>
        </div>
        <div className={styles.card}>
          <img src={search} alt="Search" />
          <div className={styles.card_title}>Grow your business</div>
          <div className={styles.card_body}>The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</div>
        </div>
        <div className={styles.card}>
          <img src={graph} alt="Graph" />
          <div className={styles.card_title}>Grow your business</div>
          <div className={styles.card_body}>The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</div>
        </div>
        <div className={styles.card}>
          <img src={bag} alt="Bag" />
          <div className={styles.card_title}>Grow your business</div>
          <div className={styles.card_body}>The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</div>
        </div>
    </div>
    </div>
  )
}
