import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class IntroStep extends Component {
    constructor(props) {
        super(props);
    }

    getHtmlCircle = (step, active = false) => {
        let className = cx({
            step: true,
            active: active,
        });
        return <span onClick={this.props.onStepClick.bind(this, step)} className={className} />;
    };

    getHtmlStepContent = step => {
        let stepContent = "";
        if (step === 1) {
            stepContent = (
                <div>
                    <h1>Chceš sa zabaviť?</h1>
                    <span className="intro-description">
                        Bombová hra, ktorá ťa zbaví nudy?
                    </span>
                    <br/>
                    <br/>
                    <span className="steps-container">
                        {this.getHtmlCircle(1, true)}
                        {this.getHtmlCircle(2)}
                        {this.getHtmlCircle(3)}
                    </span>
                </div>
            );
        } else if (step === 2) {
            stepContent = (
                <div>
                    <h1>Multiplayer.</h1>
                    <span className="intro-description">
                        Zahraj sa s kamošmi počas prestávky.
                    </span>
                    <br/>
                    <br/>
                    <span className="steps-container">
                        {this.getHtmlCircle(1)}
                        {this.getHtmlCircle(2, true)}
                        {this.getHtmlCircle(3)}
                    </span>
                </div>
            );
        } else if (step === 3) {
            stepContent = (
                <div>
                    <h1>Poďme na to.</h1>
                    <span className="intro-description">
                        a dávaj bacha appka je návyková
                    </span>
                    <br/>
                    <br/>
                    <span className="steps-container">
                        {this.getHtmlCircle(1)}
                        {this.getHtmlCircle(2)}
                        {this.getHtmlCircle(3, true)}
                    </span>
                </div>
            );
        }
        return stepContent;
    };

    render() {
        return <div>{this.getHtmlStepContent(this.props.step)}</div>;
    }
}

IntroStep.propTypes = {
    step: PropTypes.int,
};

export default IntroStep;
