import "animate.css/animate.min.css";
import Tilt from "react-parallax-tilt";
import ScrollAnimation from "react-animate-on-scroll";

import classes from "./Projects.module.css";
import monorepo from "../images/monorepo.png";
import profilee from "../images/profilee.png";
import courseApp from "../images/courseApp.png";
import github from "../images/github.png";
import frontenddev from "../images/frontenddev.png";
import jumpstart from "../images/jumpstart.png";

// Web projects
const webItem = [
  {
    link: "https://food-frontend-pink.vercel.app/",
    title: "Food Delivery Web App",
    techStack:
      "Tech Stack: React JS, Javascript, MongoDB, Express JS, Node JS, Stripe",
    desc: "A seamless food delivery web application connecting you to your favorite meals with just a few clicks.",
    image: profilee,
    color: "#0FFFFF",
    githubLink: "https://github.com/abhisek9898/food-frontend",
  },
  {
    link: "https://classic-snake-game-one.vercel.app/",
    title: "Classic Snake Game",
    techStack: "Tech Stack: React JS, Javascript, CSS",
    desc: "A exmaple of a classic snake game with multiplayer support.",
    image: frontenddev,
    color: "#E5E483",
    githubLink: "https://github.com/mittalsam98/frontenddev",
  },
  {
    link: "https://github.com/abhisek9898/Coffee_Cafe_Web",
    title: "Coffee_Cafe_Web",
    techStack: "Technology used: Typescript, React JS, Tailwind CSS",
    desc: "A cozy coffee café web application for ordering your favorite brews and treats online.",
    image: jumpstart,
    color: "#D2E0FB",
    githubLink: "https://github.com/abhisek9898/Coffee_Cafe_Web",
  },
  {
    link: "https://car-web-demo.vercel.app/",
    title: "Car_Web_Demo",
    techStack: "Tech Stack: React JS, Typescript",
    desc: "It is a e-commerce app built in a MERN stack using Monorepo. This is 100% typescript.",
    image: monorepo,
    color: "#FEA1A1",
    githubLink: "https://github.com/abhisek9898/Car_Web_Demo",
  },
  {
    link: "https://money-manager-mocha.vercel.app/",
    title: "Money Management App",
    techStack: "Tech Stack: React JS, Tailwind CSS, Appwrite for auth",
    desc: "Track your courses and earn money.",
    image: courseApp,
    color: "#C1A4AA",
    githubLink: "https://github.com/abhisek9898/money-manager",
  },
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: "21px" }}>
          <a
            href={cardItem.link}
            className={classes.card}
            target="_blank"
            rel="noreferrer"
          >
            <img src={cardItem.image} className={classes.card__image} alt="" />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink)
                window.open(cardItem?.githubLink, "_blank");
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && (
              <img
                src={github}
                className={classes.card__title__img}
                alt="GitHub Logo"
              />
            )}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id="projects">
      <ScrollAnimation
        offset={0}
        animateIn="fadeInLeft"
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>WEB PROJECTS</h2>
        <ul className={classes.cards}>
          {webItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
      </ScrollAnimation>
    </div>
  );
}
