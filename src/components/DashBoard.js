import React, { Component } from 'react';
import { Panel, Row, Col, Button } from 'react-bootstrap';

import '../style.css';

class DashBoard extends Component {
    render() {
        return (
            <div className="dashBoard">
                <h1>Dashboard</h1>
                <Row className="dashBoardFirstRow">
                    <Col md={4}>
                        <Panel header="TOTAL SONGS CURATED" className="dashBoardPanel">

                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header="NEW SONGS" className="dashBoardPanel">

                        </Panel>
                    </Col>
                    <Col md={4}>
                        <Panel header=" " className="dashBoardPanel">

                        </Panel>
                    </Col>
                </Row>
                <Row className="dashBoardSecondRow">
                    <Panel 
                        footer={
                            <div className="socialPanelFooter">
                                <Button block>CONNECT</Button>
                            </div>
                        }
                        className="dashBoardSocialPanel facebookPanel">
                        <div className="socialPanelHeader">
                            <img src="logos/facebook-white.svg" class="facebook-icon" alt="facebook"/>
                        </div>
                    </Panel>

                    <Panel 
                        footer={
                            <div className="socialPanelFooter">
                                <Button block>CONNECT</Button>
                            </div>
                        }
                        className="dashBoardSocialPanel youtubePanel">
                        <div className="socialPanelHeader">
                            <img src="logos/youtube-white.svg" class="youtube-icon" alt="youtube"/>
                        </div>
                    </Panel>

                    <Panel 
                        footer={
                            <div className="socialPanelFooter">
                                <Button block>CONNECT</Button>
                            </div>
                        }
                        className="dashBoardSocialPanel soundcloudPanel">
                        <div className="socialPanelHeader">
                            <img src="logos/soundcloud-white.svg" class="soundcloud-icon" alt="soundcloud"/>
                        </div>
                    </Panel>

                    <Panel 
                        footer={
                            <div className="socialPanelFooter">
                                <Button block>CONNECT</Button>
                            </div>
                        }
                        className="dashBoardSocialPanel spotifyPanel">
                        <div className="socialPanelHeader">
                            <img src="logos/spotify-white.svg" class="spotify-icon" alt="spotify"/>
                        </div>
                    </Panel>

                    <Panel 
                        footer={
                            <div className="socialPanelFooter">
                                <Button block>CONNECT</Button>
                            </div>
                        }
                        className="dashBoardSocialPanel hypemachinePanel">
                        <div className="socialPanelHeader">
                            <img src="logos/hype-machine.svg" class="hype-machine-icon" alt="hype-machine"/>
                        </div>
                    </Panel>

                    <Panel 
                        footer={
                            <div className="socialPanelFooter">
                                <Button className="viewAllButton" block>
                                    VIEW ALL &nbsp; &nbsp;
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>    
                                </Button>
                            </div>
                        }
                        className="dashBoardSocialPanel">
                        <div className="socialPanelHeader">
                            <Row style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    width: 155 
                                }}>
                                <Panel style={{ width: 40, height: 40 }}>
                                    <img src="logos/reddit-small.svg" class="small-icon" alt="hype-machine"/>
                                </Panel>

                                <Panel style={{ width: 40, height: 40, paddingLeft: 3 }}>
                                    <img src="logos/playmusic-small.svg" class="small-icon" alt="hype-machine"/>
                                </Panel>

                                <Panel style={{ width: 40, height: 40, paddingLeft: 5 }}>
                                    <img src="logos/pandora-small.svg" class="small-icon" alt="hype-machine"/>
                                </Panel>
                            </Row>
                            <Row style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    width: 155 
                                }}>
                                <Panel style={{ width: 40, height: 40 }}>
                                    <img src="logos/rdio-small.svg" class="small-icon" alt="hype-machine"/>
                                </Panel>

                                <Panel style={{ width: 40, height: 40 }}>
                                    <img src="logos/youtube-small.svg" class="small-icon" alt="hype-machine" width="20px"/>
                                </Panel>

                                <Panel style={{ width: 40, height: 40 }}>
                                    <img src="logos/hype-machine-small.svg" class="small-icon" alt="hype-machine"/>
                                </Panel>
                            </Row>
                        </div>
                    </Panel>
                </Row>
            </div>
        );
    }
}

export default DashBoard;