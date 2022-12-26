import { Col } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useState } from "react";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  images,
  youtubeLink,
  videoLink,
  gifLink,
  isCommercial,
  previewLink,
  githubLink,
  builtUsing,
}) => {
  const [show, setShow] = useState(false);

  return (
    // <Col size={12} sm={6} md={4}>
    <div class="tw-w-[400px] tw-max-h-[180px]">
      <div className="proj-imgbx tw-max-h-[180px]">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {/* <span>{description}</span> */}
          {/* <a href="rktutors.co.uk">hello</a> */}

          <span
            className="tw-cursor-pointer tw-underline "
            onClick={() => setShow(true)}
          >
            View Project
          </span>

          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="tw-text-black modal-width"
            style={{ background: "rgba(255, 255, 255, 0.3)" }}
          >
            <Modal.Header className="tw-bg-black">
              <Modal.Title className="tw-mx-auto tw-text-white tw-font-black tw-text-3xl">
                {/* <Modal.Title className="tw-mx-auto tw-text-indigo-700"> */}
                {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              className=""
              style={{
                padding: "30px",
                background: "rgba(0,0,0,0.9)",
                color: "white",
              }}
            >
              <div className="tw-mb-8 tw-font-light">{description}</div>
              {isCommercial && (
                <div className="tw-mb-8 tw-text-sm tw-font-black tw-text-white">
                  This is a commercial product. Please contact for more
                  information on the code & technologies.
                </div>
              )}
              {builtUsing && (
                <div className="tw-mb-8 tw-text-sm tw-font-black tw-text-white">
                  {builtUsing}
                </div>
              )}
              {/* image stuff */}
              <div className="tw-carousel tw-w-full">
                {images &&
                  images.map((image, i) => (
                    <div
                      id={`item${i + 1}`}
                      className="tw-carousel-item tw-w-full tw-h-fit"
                    >
                      <img
                        src={image}
                        className="tw-w-fit tw-max-h-[300px] tw-mx-auto tw-border-white tw-border tw-border-solid"
                      />
                    </div>
                  ))}
                {/* 
                <div id="item1" className="tw-carousel-item tw-w-full">
                  <img
                    src="https://placeimg.com/800/200/arch"
                    className="tw-w-full"
                  />
                </div>
                <div id="item2" className="tw-carousel-item tw-w-full">
                  <img
                    src="https://placeimg.com/800/200/arch"
                    className="tw-w-full"
                  />
                </div>
                <div id="item3" className="tw-carousel-item tw-w-full">
                  <img
                    src="https://placeimg.com/800/200/arch"
                    className="tw-w-full"
                  />
                </div> */}
              </div>
              <div className="tw-flex tw-justify-center tw-w-full tw-py-2 tw-gap-2">
                {images &&
                  images.map((image, i) => (
                    <a
                      href={`#item${i + 1}`}
                      className="tw-btn tw-btn-xs hover:tw-text-white"
                    >
                      {i + 1}
                    </a>
                  ))}

                {/* <a
                  href="#item2"
                  className="tw-btn tw-btn-xs hover:tw-text-white"
                >
                2
                </a>*/}
              </div>
              {/* video stuff */}
              {youtubeLink && (
                <div class="tw-flex tw-justify-center">
                  <iframe
                    src={youtubeLink}
                    width="600"
                    height="393"
                    // title="ThingPilot - IoT Platform - Deploying a Device"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
              {gifLink && (
                <div class="tw-flex tw-justify-center">
                  <img src={gifLink} alt="..." />
                </div>
              )}
              <div className="tw-flex tw-gap-4">
                <button
                  style={{
                    background:
                      "linear-gradient(90.21deg,rgba(170, 54, 124, 0.9) -5.91%,rgba(74, 47, 189, 0.9) 111.58%)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                  }}
                  className="tw-btn tw-text-white tw-w-1/2 tw-mx-auto tw-mt-4"
                  onClick={() => window.open(previewLink, "_blank").focus()}
                >
                  View Project
                </button>
                {githubLink && (
                  <button
                    style={{
                      // background:
                      // "linear-gradient(90.21deg,rgba(170, 54, 124, 0.9) -5.91%,rgba(74, 47, 189, 0.9) 111.58%)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                    }}
                    className="tw-btn tw-text-white tw-w-1/2 tw-mx-auto tw-mt-4"
                    onClick={() => window.open(githubLink, "_blank").focus()}
                  >
                    View Code
                  </button>
                )}
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
        </div>
      </div>
    </div>
    // </Col>
  );
};
