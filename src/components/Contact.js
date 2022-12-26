import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import mailIcon from "../assets/img/mail-icon.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

import { FaEnvelope } from "react-icons/fa";
import axios from "axios";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [sending, setSending] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus({});
    // console.log(formDetails);
    // console.log(process.env.REACT_APP_CONTACT_URL);

    // return;

    try {
      setButtonText("Sending...");

      let res = await axios.post(
        process.env.REACT_APP_CONTACT_URL,
        formDetails
      );
      res = res.data;
      console.log(res);

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ succes: true, message: "Message sent successfully" });
      setSending(false);
    } catch (error) {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
      setSending(false);
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div class="sm:tw-flex sm:tw-flex-col sm:tw-items-center">
                    <h2>Get In Touch</h2>

                    <div class="tw-flex tw-justify-between tw-mb-8  sm:tw-flex-col">
                      {/* Phone */}
                      <div class="tw-flex tw-items-center tw-gap-2 tw-text-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-telephone"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
                        </svg>
                        <div class="">07419 206020</div>
                      </div>

                      {/* Email */}
                      <div class="tw-flex tw-items-center tw-gap-2 tw-text-xl">
                        <FaEnvelope />
                        <div class="">rakibkhan314@outlook.com</div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lasttName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <div class="tw-flex tw-justify-center tw-items-center">
                          <button
                            type="submit"
                            className="tw-w-full sm:tw-w-10/12"
                            disabled={sending}
                          >
                            <span>{buttonText}</span>
                          </button>
                        </div>
                      </Col>
                      {status.message && (
                        <Col size={12} sm={12}>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            <div
                              class="tw-text-center tw-mt-6 tw-p-4 tw-mb-4 tw-text-sm tw-text-green-700 tw-bg-green-100 tw-rounded-lg dark:bg-green-200 dark:text-green-800"
                              role="alert"
                            >
                              <span class="tw-font-medium">
                                {status.message}
                              </span>{" "}
                            </div>
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
