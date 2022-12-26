import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import resumePath from "../assets/files/cv.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Team Leader"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div class="sm:tw-ml-8">
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {/* {`Hi! I'm Odina`}{" "} */}
                      {`I Solve Problems Using Code`}{" "}
                      {/* <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "Team Leder" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span> */}
                    </h1>
                    <p>
                      My name is Rakib and I'm currently working as a Full Stack
                      Web Developer. Although I initially specialised in
                      Electrical & Electronics Engineering during University, I
                      developed a greater interest in coding through out my
                      years. I specialise in Web Development, but also have
                      experience working on Data Science projects and Mobile App
                      Development.
                    </p>
                    <a
                      // href="//../assets/files/Rakib Khan CV Resume.pdf"
                      href={resumePath}
                      target="_blank"
                      className="tw-no-underline"
                    >
                      <button className="tw-border tw-border-white tw-border-solid tw-px-8 tw-py-4">
                        {/* Let’s Connect <ArrowRightCircle size={25} /> */}
                        View CV/Resume
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
