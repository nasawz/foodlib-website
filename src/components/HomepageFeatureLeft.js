import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageFeatureLeft() {
    return (
        <div className="homefeture_2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="features pt-105 wow fadeInLeft" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}>
                            <div className="features__icon">
                                <img src={useBaseUrl("/img/fetures/leftIcon.png")} alt="" />
                            </div>
                            <div className="features__content mb-30">
                                <h2 className="section-title">We Create innovative solution <br /> that works pragmatically.</h2>
                                <p>You mug dropped a clanger barmy David brown <br />bread bleeding crikey say chimney pot me old <br />mucker bugger super.</p>
                                <a href="service.html">Read More<i className="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="app-image wow fadeInRight" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
                            <img src={useBaseUrl("/img/about/about1.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}