import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import IntroStep from "../components/intro/IntroStep";
import CookiesService from "../services/CookiesService";

class Intro extends Component {
    constructor(props) {
        super(props);
        let cookieService = new CookiesService();
        cookieService.setCookie('showIntro', 'no', 5);
        this.state = {
            step: 1,
        };
    }

    setStep = step => {
        this.setState(prevState => {
            return update(prevState, { step: { $set: step } });
        });
    };

    skipIntro = () => {
        this.props.history.push("/");
    };

    incrementStep = () => {
        let nextStep = this.state.step + 1;
        if (nextStep === 4) {
            this.skipIntro();
        }
        this.setStep(nextStep);
    };

    onIntroSkip = () => {
        this.skipIntro();
    };

    getHtmlButtonNext = () => {
        switch (this.state.step) {
            case 3:
                return (
                    <button className="intro-next" onClick={this.incrementStep}>
                        Poďme na to!
                    </button>
                );
            default:
                return (
                    <button className="intro-next" onClick={this.incrementStep}>
                        Ďalej
                    </button>
                );
        }
    };

    getHtmlButtonSkip = () => {
        return (
            <a className="intro-skip" onClick={this.onIntroSkip}>
                Preskočiť
            </a>
        );
    };

    render() {
        return (
            <div
                className="toto-divko"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <div className="background" />
                <div className="intro-container">
                    <IntroStep onStepClick={this.setStep} step={this.state.step} />
                    {this.getHtmlButtonNext()}
                    <br />
                    {this.getHtmlButtonSkip()}
                </div>
            </div>
        );
    }
}

Intro.propTypes = {};

export default Intro;
