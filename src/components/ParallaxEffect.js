import React, { useEffect } from "react"; // Import React and useEffect
import "./ParallaxEffect.css";
import ace from "../images/Ace.png";
import sky from "../images/backgroundmain.jpg";
import leftcloud1 from "../images/leftcloud1.png";
import leftcloud2 from "../images/leftcloud2.png";
import rightcloud1 from "../images/rightcloud1.png";
import rightcloud2 from "../images/rightcloud2.png";
// import { gsap } from "gsap";

const ParallaxEffect = () => {
  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");
    let xValue = 0,
      yValue = 0;

    let rotateDegree = 0;

    function update(cursorPosition) {
      parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;

        let zValue =
          (cursorPosition - parseFloat(getComputedStyle(el).left)) *
          isInLeft *
          0.1;

        el.style.transform = `translateX(calc(-50% + ${
          -xValue * speedx
        }px)) rotateY(${
          rotateDegree * rotateSpeed
        }deg) translateY(calc(-50% + ${
          yValue * speedy
        }px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
      });
    }

    const handleMouseMove = (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      update(e.clientX);
    };

    update(0);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="main">
      <img
        className="parallax sky-layer"
        data-rotation="0"
        data-speedz="0.03"
        data-speedx="0.03"
        data-speedy="0.06"
        src={sky}
        alt="Sky"
      />
      <img
        className="parallax person-layer"
        data-rotation="0.02"
        data-speedz="1"
        data-speedx="0.06"
        data-speedy="0.01"
        src={ace}
        alt="Person with hands wide open"
      />
      <img
        className="parallax leftcloud1-layer"
        data-rotation="0.3"
        data-speedz="0.6"
        data-speedx="0.01"
        data-speedy="0.04"
        src={leftcloud1}
        alt="leftcloud1"
      />
      <div
        className="text parallax"
        data-rotation="0.3"
        data-speedz="0.5"
        data-speedx="0.02"
        data-speedy="0.31"
      >
        <h2>Portgas D.</h2>
        <h2>Ace</h2>
      </div>
      <img
        className="parallax leftcloud2-layer"
        data-rotation="0.1"
        data-speedz="0.6"
        data-speedx="0.04"
        data-speedy="0.05"
        src={leftcloud2}
        alt="leftcloud2"
      />
      <img
        className="parallax rightcloud1-layer"
        data-rotation="0.3"
        data-speedz="0.7"
        data-speedx="0.08"
        data-speedy="0.06"
        src={rightcloud1}
        alt="rightcloud1"
      />
      <img
        className="parallax rightcloud2-layer"
        data-rotation="0.2"
        data-speedz="0.6"
        data-speedx="0.07"
        data-speedy="0.09"
        src={rightcloud2}
        alt="rightcloud2"
      />
    </div>
  );
};

export default ParallaxEffect;
