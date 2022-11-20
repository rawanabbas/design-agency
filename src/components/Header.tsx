import React, { Component } from 'react'
import styles from '../modules/Header.module.css'
import logo from '../assets/logo.svg';
import { NavHashLink } from 'react-router-hash-link';

export default class Header extends Component {
  scrolled: boolean = false;
  header: any;
  sticky: Number = 0;

  Header() {
    this.header = document.getElementById("header");
    this.sticky = this.header?.offsetTop;
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() : void {
    window.requestAnimationFrame(() => {
      this.sticky = this.header?.offsetTop;
      if (window.pageYOffset > this.sticky) {
        this.header.classList.add(styles.sticky);
      } else {
        this.header.classList.remove(styles.sticky);
      }
    })
    
  }

  render() {
    return (
      <div className={`${styles.header}`} id="header">
        <div className={styles.content}>
          <img src={logo} alt="Logo" className={styles.logo}/>
          <div className={styles.menu}>
              <ul>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#home">Home</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#info">Your Benefits</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#process">Our Process</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#testimonials">Testimonials</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#work">Our Work</NavHashLink></li>
              </ul>
          </div>
          <button className={styles['action-btn']}>Get Started</button>
        </div>
      </div>
    )
  }
}
