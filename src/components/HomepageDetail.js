import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageDetail() {
    return (
        <div className="app_details pt-120 pb-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 col-md-12">
                        <div className="details_content  pb-70">
                            <h2 className="section-title section_title_large">A new way to manage your work, tasks and projects.</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3">
                                    <div className="feature3__image">
                                        <img className="pb-30" src={useBaseUrl("/img/service/s7.png")} alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">Security Maintenance</h4>
                                        <p>The little rotter bevvy I gormless <br />  mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 pl-40">
                                    <div className="feature3__image febg1">
                                        <img className="pb-30" src={useBaseUrl("/img/fetures/s2.png")} alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">Backup Database</h4>
                                        <p>The little rotter bevvy I gormless <br />  mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3">
                                    <div className="feature3__image febg2">
                                        <img className="pb-30" src={useBaseUrl("/img/fetures/s3.png")} alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">Server Maintenance</h4>
                                        <p>The little rotter bevvy I gormless  mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="feature3 pl-40">
                                    <div className="feature3__image febg3">
                                        <img className="pb-30" src={useBaseUrl("/img/fetures/s4.png")} alt="details" />
                                    </div>
                                    <div className="feature3__content">
                                        <h4 className="content_title">No Risk Protectable</h4>
                                        <p>The little rotter bevvy I gormless  mush golly gosh cras.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-lg-6 col-md-12 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block">
                        <div className="details_image wow zoomIn" data-wow-delay=".3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'zoomIn' }}>
                            <img src={useBaseUrl("/img/fetures/mockup.png")} alt="blogshape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}