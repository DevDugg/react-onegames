// IMPORT MODULES
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  // ADD SCROLL ANIMATIONS
  const left1 = useRef();
  const left2 = useRef();
  const left3 = useRef();
  const left4 = useRef();

  const right1 = useRef();
  const right2 = useRef();
  const right3 = useRef();
  const right4 = useRef();

  const [block1, inView1] = useInView({ threshold: 0.2, triggerOnce: false });
  const [block2, inView2] = useInView({ threshold: 0.2, triggerOnce: false });
  const [block3, inView3] = useInView({ threshold: 0.2, triggerOnce: false });
  const [block4, inView4] = useInView({ threshold: 0.2, triggerOnce: false });
  const [block5, inView5] = useInView({ threshold: 0.2, triggerOnce: false });
  const [block6, inView6] = useInView({ threshold: 0.2, triggerOnce: false });
  const [block7, inView7] = useInView({ threshold: 0.2, triggerOnce: false });
  const [block8, inView8] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView1) {
      left1.current.classList.add("inview");
    }
    if (inView2) {
      left2.current.classList.add("inview");
    }
    if (inView3) {
      left3.current.classList.add("inview");
    }
    if (inView4) {
      left4.current.classList.add("inview");
    }
    if (inView5) {
      right1.current.classList.add("inview");
    }
    if (inView6) {
      right2.current.classList.add("inview");
    }
    if (inView7) {
      right3.current.classList.add("inview");
    }
    if (inView8) {
      right4.current.classList.add("inview");
    }
  });
  // ADD SCROLL ANIMATIONS =================

  return (
    <section className="about">
      <div className="container">
        <div className="about-inner">
          <div className="text-wrapper">
            <div className="text-block" ref={block5}>
              <p className="onright" ref={right1}>
                This website has been designed and developed as a personal team
                project.
              </p>
              <p></p>
            </div>
            <div className="text-block" ref={block1}>
              <p></p>
              <p className="onleft" ref={left1}>
                We've done our best to comply with the latest standards and best
                practices.
              </p>
            </div>
            <div className="text-block" ref={block6}>
              <p className="onright" ref={right2}>
                All the data on this website is fetched from rawg.io
              </p>
              <p></p>
            </div>
            <div className="text-block" ref={block2}>
              <p></p>
              <p className="onleft" ref={left2}>
                If you have any suggestions or improvements, please, feel free
                to fork:
              </p>
            </div>
            <div className="text-block" ref={block7}>
              <p className="onright" ref={right3}>
                <a href="https://github.com/VividTruthKeeper/react-onegames">
                  github.com/VividTruthKeeper/react-onegames
                </a>
              </p>
              <p></p>
            </div>
            <div className="text-block" ref={block3}>
              <p></p>
              <p className="onleft" ref={left3}>
                To contact us:
              </p>
            </div>
            <div className="text-block" ref={block8}>
              <p className="indented onright" ref={right4}>
                <a href="mailto: mr.aydogdy02@gmail.com">
                  mr.aydogdy02@gmail.com
                </a>
                <a href="mailto: kashyrberdyew@gmail.com">
                  kashyrberdyew@gmail.com
                </a>
              </p>
              <p></p>
            </div>
            <div className="text-block" ref={block4}>
              <p></p>
              <p className="indented onleft" ref={left4}>
                <a href="https://www.instagram.com/duggthevicious/">
                  @duggthevicious
                </a>
                <a href="https://www.instagram.com/abv_k_/">@abv_k_</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
