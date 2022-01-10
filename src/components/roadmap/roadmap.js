import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import roadmapimg from "../../assets/roadmap.png";

//import CSS
import './roadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '10%',
                    title: "SELL OUT!! LET’S PAY THE BANKS!",
                    content: "With the help of this community, we will be funded enough to provide dreams to all holders."
                },
                {
                    tag: '20%',
                    title: "REVEAL AND REWARDS!",
                    content: "Once we sell out, we will have a live reveal party in which all holders have access to. Legendary holder will then be rewarded 5 Ethereum."
                },
                {
                    tag: '30%',
                    title: "EXCLUSIVE 1-OF-1 MERCHANDISE ",
                    content: "Holders that meet minimum hold time, will be entitled to a 1-of-1 hoodie that represents their own SBC. If hoodie is not claimed when the SBC is minted, secondary holder may claim it for themselves."
                },
                {
                    tag: '40%',
                    title: "SERIOUS BUSINESS CATS LAUNCH—PHASE 1",
                    content: "60-Day hold verification will be completed. 2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. "
                },
                {
                    tag: '	50%  ',
                    title: "SERIOUS BUSINESS CATS LAUNCH—PHASE 2",
                    content: "2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. "
                },
                {
                    tag: '	60%  ',
                    title: "SERIOUS BUSINESS CATS LAUNCH—PHASE 3",
                    content: "2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. "
                },
                {
                    tag: '70% ',
                    title: "	 SERIOUS BUSINESS CATS LAUNCH—PHASE 4",
                    content: "2,500 holders will be randomly selected (if minimum held time is met) and will begin the process of verification and presentation of their business plan in order to be funded. (All first-time holders will have business up and running)"
                },
                {
                    tag: '80%',
                    title: "   NO ONE IS LEFT BEHIND!",
                    content: "90-Day verification will be done for all secondary owners and their business plans and verification will then be received and review in a timely fashion. ",
                },
                {
                    tag: '90%',
                    title: "LET’S GET RICH!",
                    content: "All created and funded business would have been launched and monitored for the $1 Million mark. "
                },
                {
                    tag: '100%',
                    title: "LETS DO IT AGAIN!",
                    content: "Serious Business Cats Club will give birth to their distant relatives and bring out new opportunities into the world. The creation of Serious Business Fox Club will be ready to launch. "
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <Container style={{ backgroundColor: "#FF82A9", padding: 30, border: "solid black 10px", borderRadius: 20 }}>
                    <header style={{ fontWeight: 900 }}><span>CHECK OUT OUR</span> <br /> ROADMAP</header>
                    <Row style={{ alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col xs={12} md={6}>
                            <img  className="roadimage"style={{border:"solid 10px black", borderRadius: 20}}src={roadmapimg} />
                        </Col>
                        <Col style={{ color: "white", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default RoadMap;