import React, { Component } from 'react';


class Textinputcomponentwithicon extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div className="customFormGroup clearfix">
                <label>{this.props.inputLable}</label>
                <div className="customFormGroupIcon">
                    <span className="input-group-addon">
                        <i className={this.props.inputIcon}></i></span>
                    <input
                        type={this.props.inputType}
                        name={this.props.inputName}
                        disabled={this.props.inputDisabled}
                        value={this.props.inputValue}
                        placeholder={this.props.inputPlaceholder}
                        className={this.props.inputCalssName}
                        onChange={this.props.inputHandle.bind(this)}
                        id={this.props.inputID} />
                </div>
            </div>
        );
    }
}

export default Textinputcomponentwithicon;