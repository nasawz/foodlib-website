import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageFeatureRight() {
    return (
        <div className="app_image pt-150 pb-140">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="app-image wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                            <img src={useBaseUrl("/img/about/about2.png")} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="features pt-80 feturesCommon wow fadeInUp" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                            <div className="features__icon bgclr">
                                <img src={useBaseUrl("/img/fetures/leftIcon2.png")} alt="" />
                            </div>
                            <div className="features__content">
                                <h2 className="section-title">Features that aren’t so commonplace.</h2>
                                <p>You mug dropped a clanger barmy David brown <br />bread bleeding crikey say chimney pot me old <br />mucker bugger super.</p>
                                <a href="service.html">Read More<i className="fal fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}