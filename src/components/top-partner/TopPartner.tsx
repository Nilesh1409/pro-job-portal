import React, { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./topPartner.css";
import { Col, Row } from "react-bootstrap";

const TopPartner: FC = () => {
  var items = [
    {
      name: "JustDial",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Justdial_logo.png",
    },
    {
      name: "Relince retail",
      description: "Hello World!",
      image:
        "https://images.hindustantimes.com/img/2022/11/04/1600x900/reliance_retail_1667536455615_1667536477665_1667536477665.JPG",
    },
    {
      name: "Any time fitness",
      description: "Hello World!",
      image:
        "https://1000logos.net/wp-content/uploads/2022/09/Anytime-Fitness-logo.png",
    },
  ];
  var items2 = [
    {
      name: "Teleperformance",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://cdn.join.com/61bce2758f0b6900092d4a68/teleperformance-egypt-logo-xl.png",
    },
    {
      name: "Eureka outsourcing",
      description: "Hello World!",
      image:
        "https://res.cloudinary.com/interviewair/image/upload/w_200,h_200,c_pad,b_white/v1464258677/wqkmfcsie3yfz1iadf6e.jpg",
    },
    {
      name: "Conneqt",
      description: "Hello World!",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ixaawpwhqa6qqnat8j8c",
    },
  ];
  var items3 = [
    {
      name: "Athena",
      description: "Probably the most random thing you have ever seen!",
      image: "https://athenabpo.com/wp-content/uploads/2016/10/athena-logo.jpg",
    },
    {
      name: "Eureka outsourcing",
      description: "Hello World!",
      image:
        "https://res.cloudinary.com/interviewair/image/upload/w_200,h_200,c_pad,b_white/v1464258677/wqkmfcsie3yfz1iadf6e.jpg",
    },
    {
      name: "Conneqt",
      description: "Hello World!",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ixaawpwhqa6qqnat8j8c",
    },
  ];

  function Item(props: any) {
    return (
      <Paper>
        <img
          style={{ width: "200px", height: "150px", margin: "0 15%" }}
          src={props.item.image}
        />
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "22px" }}>{props.item.name}</h2>
        </div>
        {/* <p>{props.item.description}</p> */}

        {/* <Button className="CheckButton">
                    Check it out!
                </Button> */}
      </Paper>
    );
  }

  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Our Top Partners</h2>
        <p>Leading Collaborators: Our Top Partners in Success and Growth.</p>
      </div>
      {/* <div > */}
      <Row className="carousel-container">
        <Col sm={12} xs={12} md={6} lg={3}>
          <Carousel
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<ArrowBackIosIcon />}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Col>
        <Col sm={12} xs={12} md={6} lg={3}>
          <Carousel
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<ArrowBackIosIcon />}
          >
            {items2.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Col>
        <Col sm={12} xs={12} md={6} lg={3}>
          <Carousel
            NextIcon={<NavigateNextIcon />}
            PrevIcon={<ArrowBackIosIcon />}
          >
            {items3.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Col>
      </Row>
      {/* </div> */}
    </div>
  );
};

export default TopPartner;
