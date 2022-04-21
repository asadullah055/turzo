import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [massage, setMassage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4o5w0hr",
        "template_teu5gck",
        form.current,
        "BkAjLw5rtD5__QENP"
      )
      .then(
        (result) => {
          setMassage("Massage Send Successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="heading">
          <h2 className="text-center">Contact</h2>
        </div>
      </div>
      <div className="row bg-white justify-content-center">
        <h3 className="text-center pt-3 pb-3">
          Contact <span className="title2">Form</span>
        </h3>
        <div className="col-md-6 pb-5">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Subject</Form.Label>
              <Form.Control type="text" name="subject" placeholder="Subject" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bold">Massage</Form.Label>
              <Form.Control as="textarea" name="message" rows={3} />
            </Form.Group>
            <Button className="w-100 fs-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p className="text-success mt-3 text-center fw-bold">{massage}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
