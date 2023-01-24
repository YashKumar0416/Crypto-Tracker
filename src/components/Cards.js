import React, { Component } from 'react';

export class Cards extends Component {
    render() {
        return (
            <div>
                <section className="row m-0 mb-3" style={{ marginTop: ' 2px !important', display:'flex', justifyContent:'space-evenly'}}>
                <div className="card text-white text-center m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body p-2">
                            <h5 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'orange' }}>{this.props.coinName}</h5>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                ${this.props.currentPrice}
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body p-2">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Market Cap 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                {this.props.mCap24} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body p-2">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                ${this.props.ath}
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body p-2">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Sentiments</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body p-2">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> High 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0) " }}>
                                ${this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body p-2">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Low 24Hrs </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: 'rgb(255, 32, 32)' }}>
                                ${this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Cards;