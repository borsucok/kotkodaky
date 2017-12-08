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
                    <h1>Koľko slniečka na mňa dopadne?</h1>
                    <span className="intro-description">
                        Pomôžem ti zistiť energetický potenciál v danej oblasti. Oplatí sa nám
                        inštalovať fotovolatický panel?
                    </span>
                    <div
                        className="intro-image"
                        style={{
                            backgroundImage:
                                "url('" + process.env.PUBLIC_URL + "/icons/intro/step-1.svg')",
                        }}
                    />
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
                    <h1>Júúúj! Veľa vody.</h1>
                    <span className="intro-description">
                        Pozri si, ako sa bude v danej oblasti rozlievať voda v prípade silného
                        dažďa.
                    </span>
                    <div
                        className="intro-image"
                        style={{
                            backgroundImage:
                                "url('" + process.env.PUBLIC_URL + "/icons/intro/step-2.svg')",
                        }}
                    />
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
                    <h1>Tu by som chcel bývať.</h1>
                    <span className="intro-description">
                        Vyber si oblasť a spoločne vyhodnotíme, ako je dané miesto bezpečné a koľko
                        vďaka nemu ušetríš.
                    </span>
                    <div
                        className="intro-image"
                        style={{
                            backgroundImage:
                                "url('" + process.env.PUBLIC_URL + "/icons/intro/step-3.svg')",
                        }}
                    />
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
