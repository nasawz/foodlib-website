import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
// import styles from './HomepageFeatures.module.css';


// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} alt={title} />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
<div className="homefeture_1 pt-115 pb-130">
        <div className="container">
            <div className="app_left_shape">
                <img className="leftanimation d-none d-sm-block" src={useBaseUrl("/img/shape/left.png")} alt="leftshape" />
                <img src={useBaseUrl("/img/shape/shape7.png")} alt="leftshape" />
                <img className="downsahpe d-none d-sm-block" src={useBaseUrl("/img/shape/shape3.png")} alt="leftshape" />
            </div>
            <div className="section_title_wrapper text-center wow fadeInUp mb-70" data-wow-delay="0.3s" style={{visibility:'visible',animationDelay:'0.3s',animationName:'fadeInUp'}}>
                <h2 className="section-title">Shine the new <br /> light on the digital world</h2>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="feabox mb-30">
                        <div className="feabox__img mb-50">
                            <img src={useBaseUrl("/img/fetures/Forma1.png")} alt="form1" />
                        </div>
                        <div className="feabox__content">
                            <h3 className="feabox-title tcolor0">Premium Plugins</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="feabox mb-30 clr1">
                        <div className="feabox__img img1 mb-50">
                            <img src={useBaseUrl("/img/fetures/Forma2.png")} alt="form2" />
                        </div>
                        <div className="feabox__content">
                            <h3 className="feabox-title tcolor1">Security Potential </h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="feabox mb-30 clr2">
                        <div className="feabox__img img2 mb-50">
                            <img src={useBaseUrl("/img/fetures/Forma3.png")} alt="form3" />
                        </div>
                        <div className="feabox__content">
                            <h3 className="feabox-title tcolor2">Share Online</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="feabox mb-30 clr3">
                        <div className="feabox__img img3 mb-50">
                            <img src={useBaseUrl("/img/fetures/Forma4.png")} alt="form4" />
                        </div>
                        <div className="feabox__content">
                            <h3 className="feabox-title tcolor3">Risk Protectable</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
