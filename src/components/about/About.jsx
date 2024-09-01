import { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              Hi! My name is <b>ABHISEK MALLA</b>. I am a passionate web developer having experience
              in <b>Frontend</b> development complemented by <b>Backend</b> expertise and I am a{' '}
              <b>Freelancer</b> as a <b>React JS Developer.</b> I am much interested in developing
              new things which excite me a lot. :)
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like to stay on top of
              latest trends. I try to leave every line of code I write more readable, accessible,
              and modular. My problem-solving mindset and active{' '}
              <b>
                <a href='https://github.com/abhisek9898'>GitHub</a>
              </b>{' '}
              profile showcase my commitment to innovative and collaborative coding.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
