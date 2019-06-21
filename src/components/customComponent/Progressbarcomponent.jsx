import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';

class Progressbarcomponent extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <div className="customProgress clearfix">
                    <span>{this.props.progressTitle}<i>{this.props.progressValue}</i></span>
                    <div><dd style={this.props.progressStyle}></dd></div>
                </div>
            </div>
        );
    }
}

export default Progressbarcomponent;