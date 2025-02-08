import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaMapMarkerAlt, FaShoppingBag, FaCalendarCheck } from "react-icons/fa";


const features = [
  {
    icon: <FaUsers size={24} />,
    title: "People",
    description: "An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.",
    buttonText: "Connect",
    borderClass: "border-purple",
  },
  {
    icon: <FaMapMarkerAlt size={24} />,
    title: "Place",
    description: "An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
    buttonText: "Meet up",
    borderClass: "border-green",
  },
  {
    icon: <FaShoppingBag size={24} />,
    title: "Product",
    description: "An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.",
    buttonText: "Get it",
    borderClass: "border-red",
  },
  {
    icon: <FaCalendarCheck size={24} />,
    title: "Program",
    description: "An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.",
    buttonText: "Attend",
    borderClass: "border-blue",
    },
    ];
    
    const FeatureCards = () => {
        return (
            <>
    <Container className="py-5">
      <h3 className="text-center fw-bold mb-4">Add Your Listing</h3>
      <Row className="g-4">
        {features.map((feature, index) => (
            <Col md={6} key={index}>
            <Card className={`feature-card ${feature.borderClass}`}>
              <Card.Body className="">
                <div className="feature-icon">{feature.icon}</div>
                <h5 className="fw-bold mb-3 feature-title">{feature.title}</h5>
                <p className="feature-description">{feature.description}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <style>
        {`
    .feature-card {
    background-color: white;
    border: 2px solid transparent;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    }
    
    .feature-icon {
    font-size: 24px;
    transition: color 0.3s ease-in-out;
    }
    
    .feature-card:hover {
    color: white;

    }
    
    .feature-card:hover .feature-title,
    .feature-card:hover .feature-description,
    .feature-card:hover .feature-icon {
    color: white;
    }
    
    .border-purple { border-color: #7E57C2; }
    .border-green { border-color: #8BC34A; }
    .border-red { border-color: #E57373; }
    .border-blue { border-color: #03A9F4; }
    
    .border-purple:hover { background-color: #7E57C2; }
    .border-green:hover { background-color: #8BC34A; }
    .border-red:hover { background-color: #E57373; }
    .border-blue:hover { background-color: #03A9F4; }
        `}
    </style>
    </>
  );
};

export default FeatureCards;



        