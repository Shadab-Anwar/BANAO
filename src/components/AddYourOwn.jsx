import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

const AddYourOwn = () => {
  return (
    <Container className="py-5">
      <Card className="border-0 shadow-sm p-4 rounded" style={{ backgroundColor: "#F7FAFC" }}>
        <Card.Body className="d-flex flex-column flex-md-row align-items-start">
          <div className="me-3">
            <FaPlusCircle size={28} className="text-primary" />
          </div>
          <div>
            <h5 className="fw-bold">Add your own</h5>
            <p className="mb-3">
              Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, do you know
              someone who should be on HobbyCue? Go ahead and add your own page.
            </p>
            <Button variant="outline-secondary">Add new</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddYourOwn;
