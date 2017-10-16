import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setLinkValue } from '../actions';
import { bindActionCreators } from 'redux';

import '../style.css';

class SideBar extends Component {
    handleValueOne = () => {
        this.props.setLinkValue(1);
    }
    handleValueTwo = () => {
        this.props.setLinkValue(2);
    }
    handleValueThree = () => {
        this.props.setLinkValue(3);
    }
    handleValueFour = () => {
        this.props.setLinkValue(4);
    }
    handleValueFive = () => {
        this.props.setLinkValue(5);
    }
    handleValueSix = () => {
        this.props.setLinkValue(6);
    }
    handleValueSeven = () => {
        this.props.setLinkValue(7);
    }
    handleValueEight = () => {
        this.props.setLinkValue(8);
    }
    render() {
        return (
            <Nav pullLeft stacked activeKey={this.props.linkValue} className="sideBar">
                <div style={{display: 'flex', paddingBottom: 50}}>
                    <i class="fa fa-music fa-3x" aria-hidden="true"></i>
                    <h4 style={{ fontWeight:700 }}>JAMHEART</h4>
                </div>
                <NavItem 
                    eventKey={1}
                    onClick={this.handleValueOne}
                    className="componentLink">
                        Dashboard
                </NavItem>
                <NavItem 
                    eventKey={2} 
                    onClick={this.handleValueTwo} 
                    className="componentLink">
                        Feed
                </NavItem>
                <NavItem 
                    eventKey={3} 
                    onClick={this.handleValueThree} 
                    className="componentLink">
                        Favorites
                </NavItem>
                <h6 style={{
                    marginTop: 55,
                    marginBottom: 24, 
                    fontSize: 8, 
                    color: '#d3d4d5',
                    marginLeft: 15,
                    }}>
                        CHANNELS
                    </h6>
                <NavItem 
                    eventKey={4} 
                    onClick={this.handleValueFour} 
                    className="socialMedia">
                        <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                        Facebook
                </NavItem>
                <NavItem 
                    eventKey={5} 
                    onClick={this.handleValueFive} 
                    className="socialMedia">
                        <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                        YouTube
                </NavItem>
                <NavItem 
                    eventKey={6} 
                    onClick={this.handleValueSix} 
                    className="socialMedia">
                        <i class="fa fa-soundcloud fa-lg" aria-hidden="true"></i>
                        SoundCloud
                </NavItem>
                <NavItem 
                    eventKey={7} 
                    onClick={this.handleValueSeven} 
                    className="socialMedia">
                        <i class="fa fa-spotify fa-lg" aria-hidden="true"></i>
                        Spotify
                </NavItem>
                <NavItem 
                    eventKey={8} 
                    onClick={this.handleValueEight} 
                    className="socialMedia">
                        HypeM
                </NavItem>
                <Button bsStyle="info" className="channelButton" >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Add Channel
                </Button>
            </Nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        linkValue: state.linkValue
    };
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ setLinkValue }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
