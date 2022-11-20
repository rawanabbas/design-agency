import React, { Component } from 'react'

import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Work from '../components/Work';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Info from '../components/Info';

import styles from '../modules/Home.module.css'

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Header></Header>
        <Hero></Hero>
        <Info></Info>
        <Process></Process>
        <Brands></Brands>
        <Work></Work>
        <Footer></Footer>
      </div>
    )
  }
}
