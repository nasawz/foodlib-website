import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageDownload() {
    return (
        <div className="download-area pt-50 mt-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 d-sm-none d-md-block">
                    <div className="download_image">
                        <img className="dw d-none d-sm-block" src={useBaseUrl("/img/shape/iphon2.png")} alt="download_shape" />
                        <img className="downloadpos  d-md-none d-lg-block d-none d-sm-block" src={useBaseUrl("/img/shape/iphone3.png")} alt="download_shape" />
                        <img className="downloadpos2 d-md-none d-lg-block d-none d-sm-block" src={useBaseUrl("/img/shape/circle.png")} alt="download_shape" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                    <div className="download_content pl-105 pt-90">
                        <h2 className="section-title">Download Your Amazing App Available Now.</h2>
                        <p>Horse play argy-bargy me old mucker boot bog show off show off pick your nose and blow off cack, cras buggered say.</p>
                        <div className="download-btn">
                            <a className="tp_download" href="#"><i className="fab fa-apple"></i></a>
                            <a className="bg-android" href="#"><i className="fal fa-user-robot"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}