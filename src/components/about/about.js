import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/catz.gif";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div className="about-control">
        <Container>
          <Row>
            <Col md={6} xs={12} className="about-description">
              <header>
                <span>BILLIONS OF CATS IN THE WORLD.</span>
                <br />
                <span>ONLY 10,000 MEAN</span> SERIOUS BUSINESS.
              </header>
              <p>
                Serious Business Cats Club is a collection of 10,000 serious
                business cats NFTs (non-fungible tokens) that conduct all their
                business inside the Ethereum blockchain. Uniquely designed and
                compromised, the SBCs will provide each holder with great
                utilities and rewards with each business matter associated with
                and through the Serious Business Cats Club.{" "}
              </p>
              <header>
                <span></span> UTILITIES:
              </header>
              <p>
                1. Each Holder will have the ability to access exclusive
                business content pertaining to each and one of the cats.
                <br />
                2. 10,000 Opportunities will be given to the holders of the
                SBCs.
                <br />
                3. All holders will be given equal opportunities to launch their
                legally owned business through Serious Business Cats Club and
                will be funded until each business successfully reach the $1
                Million Dollar Mark!
              </p>

              {/* <div><YButton text='COMING SOON' /></div> */}
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 10px", borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Col className="about-description">
            <header style={{ textAlign: "center" }}>ROYALTIES:</header>
            <p style={{ textAlign: "center" }}>
              The royalties have been set to 5% of all secondary market sells.
              All money raised will be used to fund the business plans of all
              holders that develop independent and thorough plans to create a
              million-dollar business. Primary holders of the SBCs will have to
              hold a minimum of 60 days until all benefits can be provided; if
              minimum hold time is not accomplished, their SBCs will be
              nullified from royalty compensation. Secondary holders will have a
              minimum hold time of 90 days. All benefits will be then passed on.
            </p>

            {/* <div><YButton text='COMING SOON' /></div> */}
          </Col>
          {/* <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 10px", borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col> */}
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 10px", borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
            <Col md={6} xs={12} className="about-description">
              <header>
                <span>ONLY A HANDFUL OF </span>SBCs{" "}
                <span>WILL HAVE A SPECIAL RARITY...</span>
                <br />
              </header>
              <p style={{fontSize: 25}}>
                Holders of the:
                <br />
                <text style={{color: "#172A55", fontSize: 25}}>• Cactiman Suit</text>
                <br />
                <text style={{color: "#172A55", fontSize: 25}}>• Goldman Suit</text>
                <br />
                <text style={{color: "#172A55", fontSize: 25}}>• Louis Vuitton Suit</text>
                <br />
                <text style={{color: "#172A55", fontSize: 25}}>• Etherman Suit</text>
                <br />
                <text style={{color: "#172A55", fontSize: 25}}>• Royal Plains Suit</text>
                <br />
                Will be given a fully loaded <text style={{color: "#172A55", fontSize: 25}}>2022 BMW M8 Competition Coupe</text> in
                the color of their choice! (MSRP $156,350.00)
                <br/>
                Holders can deny the car for a cash price of $100,000!
              </p>

              {/* <div><YButton text='COMING SOON' /></div> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
