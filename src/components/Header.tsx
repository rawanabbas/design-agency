import React, { Component } from 'react'
import styles from '../modules/Header.module.css'
import logo from '../assets/logo.svg';
import { NavHashLink } from 'react-router-hash-link';

interface IHeaderProps {

}
interface IHeaderState {
  open?: boolean;
}
export default class Header extends Component<IHeaderProps, IHeaderState> {
  scrolled: boolean = false;
  header: HTMLElement | any;
  sticky: Number = 0;
  menuBtn: HTMLElement | any;

  constructor(props : IHeaderProps) {
    super(props);
    this.header = document.getElementById("header");
    this.menuBtn = document.getElementById("menu-btn");
    this.sticky = this.header?.offsetTop;
    this.state = {
      open: false
    }
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

  toggleMenu = () => {
    this.setState({open: !this.state.open});
    window.requestAnimationFrame(() => {
      document?.getElementById("menu-btn")?.classList.toggle(styles.menu_btn_open);
    })
  }

  render() {
    return (
      <div className={`${styles.header}`} id="header">
        <div className={`${styles.content} ${this.state.open ? styles.full_header : ''}`}>
          <img src={logo} alt="Logo" className={styles.logo}/>
          <div className={`${styles.menu} ${!this.state.open ? styles.menu_resp : ''}`}>
              <ul>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#home">Home</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#info">Your Benefits</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#process">Our Process</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#testimonials">Testimonials</NavHashLink></li>
                <li><NavHashLink scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#work">Our Work</NavHashLink></li>
              </ul>
          </div>
          <button className={`${styles['action-btn']} ${!this.state.open ? styles['action-btn_resp'] : ''}`}>Get Started</button>
        </div>
          <div className={styles.menu_btn} onClick={this.toggleMenu} id="menu-btn">
            <div className={styles.menu_line}></div>
          </div>
      </div>
    )
  }
}
