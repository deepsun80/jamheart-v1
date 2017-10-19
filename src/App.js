import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';

import UserAuth from './components/UserAuth';
import DashBoard from './components/DashBoard';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Favorites from './components/Favorites';

import Facebook from './components/socialmedia/Facebook';
import YouTube from './components/socialmedia/YouTube';
import SoundCloud from './components/socialmedia/SoundCloud';
import Spotify from './components/socialmedia/Spotify';
import HypeM from './components/socialmedia/HypeM';

import './style.css';

const App = (props) => {
    switch (props.linkValue) {
      case 1:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <DashBoard />
              </Row>
            </Col>
          </div>
        );
      case 2:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <Feed />
              </Row>
            </Col>
          </div>
        );
      case 3:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <Favorites />
              </Row>
            </Col>
          </div>
        );
      case 4:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <Facebook />
              </Row>
            </Col>
          </div>
        );
      case 5:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <YouTube />
              </Row>
            </Col>
          </div>
        );
      case 6:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <SoundCloud />
              </Row>
            </Col>
          </div>
        );
      case 7:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <Spotify />
              </Row>
            </Col>
          </div>
        );
      case 8:
        return (
          <div>
            <Col md={4}>
              <SideBar />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <UserAuth />
                </Col>
              </Row>
              <Row>
                <HypeM />
              </Row>
            </Col>
          </div>
        );
      default:
        return (
          <div>
            <SideBar />
            <Row>
              <Col md={4}>
                <UserAuth />
              </Col>
            </Row>
            <Row>
              <DashBoard />
            </Row>
          </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        linkValue: state.linkValue
    };
};

export default connect(mapStateToProps)(App);