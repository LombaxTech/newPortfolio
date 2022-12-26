import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

// RKTutors Images
import rktutorsCoverImageThumbnail from "../assets/img/projects/rktutors/coverImg2.jpg";
import rktutorsCoverImage from "../assets/img/projects/rktutors/coverImg.PNG";
import signupChoose from "../assets/img/projects/rktutors/signupChoose.PNG";
import tutorSignup from "../assets/img/projects/rktutors/tutorSignup.PNG";
import tutorDashboard from "../assets/img/projects/rktutors/tutorDashboard.PNG";
import bookingCalendar from "../assets/img/projects/rktutors/bookingCalendar.PNG";
import addPaymentMethod from "../assets/img/projects/rktutors/addPaymentMethod.PNG";
import chat from "../assets/img/projects/rktutors/chat.PNG";

// ThingPilot Images
import thingPilotCoverImage from "../assets/img/projects/thingpilot/coverImage.webp";

// PRALCalculator Images
import pralCalculatorCoverImage from "../assets/img/projects/pralCalculator/coverImage.webp";
import pralCalculatorGif from "../assets/img/projects/pralCalculator/usage.gif";

// Portfolio Images
import portfolioCover from "../assets/img/banner-bg.png";
import portfolioGif from "../assets/img/projects/portfolio/usage.gif";

// Game Images
import gameCover from "../assets/img/projects/game/cover.PNG";
import gameGif from "../assets/img/projects/game/usage.gif";

export const Projects = () => {
  const projects = [
    {
      title: "RKTutors",
      description:
        "RKTutors is a tutoring platform aimed towards GCSE & A-Level students in the UK. Functionality includes Authentication, Multiple Account Types (Student, Tutor, Admin), Real Time Messaging, Payments, Email Notifications and much more.",
      imgUrl: rktutorsCoverImageThumbnail,
      previewLink: "https://rktutors.co.uk",
      isCommercial: true,
      images: [
        rktutorsCoverImage,
        signupChoose,
        tutorSignup,
        tutorDashboard,
        bookingCalendar,
        addPaymentMethod,
        chat,
      ],
    },
    {
      title: "ThingPilot",
      description:
        "The ThingPilot platform (still due to launch) allows entrepreneurs to easily design IoT prototypes. Platform includes a wide range of features including authentication, payments (multiple subscription plans), email notifications, and more.",
      imgUrl: thingPilotCoverImage,
      previewLink: "https://thingpilot.com/",
      isCommercial: true,
      youtubeLink: "https://www.youtube.com/embed/goqn5k3hTM8",
    },
    {
      title: "PRAL Calculator",
      description:
        "A web app which allows people to easily calculate the PRAL (Potential Renal Acid Load) of their diet. Patients of Kidney Disease benefit from keeping their PRAL low as this reduces the stress put on their kidneys. Calculating this value by hand each time can be tedious so this app helps simplify that process.",
      builtUsing: "Core technologies used include Next.js and Tailwind.",
      imgUrl: pralCalculatorCoverImage,
      previewLink: "https://pral-calculator.netlify.app/",
      isCommercial: false,
      gifLink: pralCalculatorGif,
      githubLink: "https://github.com/LombaxTech/pralCalculator",
    },
    {
      title: "Personal Site",
      description:
        "A web app portfolio which showcases projects and allow people to download a copy of my CV and contact me.",
      builtUsing:
        "Core technologies used include React.js, Tailwind, Express etc",
      imgUrl: portfolioCover,
      previewLink: "https://rakibkhan.netlify.app/",
      isCommercial: false,
      gifLink: portfolioGif,
      githubLink: "https://github.com/LombaxTech/newPortfolio",
    },
    {
      title: "SpaceshipFlyer",
      description:
        "A singleplayer 2D game made in Unity. Players must make to their way to the end of the level while avoiding flying obstacles.",
      builtUsing: "Core technologies used include Unity3D, C#",
      imgUrl: gameCover,
      previewLink: "https://lombaxtech.github.io/SpaceshipFlyer/",
      isCommercial: false,
      gifLink: gameGif,
    },

    // {
    //   description: "Design & Development",
    //   imgUrl: projImg4,
    // },
    // {
    //   description: "Design & Development",
    //   imgUrl: projImg5,
    // },
    // {
    //   description: "Design & Development",
    //   imgUrl: projImg6,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="tw-mb-14">Projects</h2>
                  {/* <p>
                    I show you to all the big and small websites I have done so
                    far
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {/* <Row> */}
                        <div class="tw-flex tw-gap-6 tw-flex-wrap tw-justify-center">
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </div>

                        {/* </Row> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
