import React ,{useEffect}from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageFeatureLeft from '../components/HomepageFeatureLeft';
import HomepageFeatureRight from '../components/HomepageFeatureRight';
import HomepageDetail from '../components/HomepageDetail';
import HomepageDownload from '../components/HomepageDownload';
import useBaseUrl from '@docusaurus/useBaseUrl';

// 高亮开始
import Translate, {translate} from '@docusaurus/Translate';
// 高亮结束

// import useThemeContext from '@theme/hooks/useThemeContext';
// const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
// return <h1>Dark mode is now {isDarkTheme ? 'on' : 'off'}</h1>;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {

    (function ($) {
      "use strict";

      /*
      
      ****************************************************
      01. mobile menu
      ****************************************************
      */

      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
      });

      $('.side-toggle').on('click', function () {
        $('.side-info').addClass('info-open');
        $('.offcanvas-overlay').addClass('overlay-open');
      })

      $('.side-info-close,.offcanvas-overlay').on('click', function () {
        $('.side-info').removeClass('info-open');
        $('.offcanvas-overlay').removeClass('overlay-open');
      })

      // One Page Nav
      var top_offset = $('.header-area').height() - 10;
      $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
      });


      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
        } else {
          $(".header-sticky").addClass("sticky");
        }
      });

      /*
      
      ****************************************************
      02. testimonial active
      ****************************************************
      */


      $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

      /*
      
      ****************************************************
      03. team active
      ****************************************************
      */

      $('.team-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

      /*
      
      ****************************************************
      04. choose active
      ****************************************************
      */

      $('.choose_active').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

      /*
      
      ****************************************************
      05. Home page 3 testimonial
      ****************************************************
      */

      $('.testimonialh3_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
      });

      $('.testimonial-active2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
      });

      /*
      
      ****************************************************
      06. Home page 2 testimonial
      ****************************************************
      */

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        infinite: true,
        asNavFor: '.slider-nav',
      });
      $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',

      });

      /*
      
      ****************************************************
      07. data background
      ****************************************************
      */
      $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
      });


      // mainSlider
      function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);
        });
        BasicSlider.slick({
          autoplay: false,
          autoplaySpeed: 10000,
          dots: false,
          fade: true,
          arrows: false,
          responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
          ]
        });

        function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
              $this.removeClass($animationType);
            });
          });
        }
      }
      mainSlider();


      /*
      
      ****************************************************
      08. wow active
      ****************************************************
      */

      new WOW().init();

      /*
      
      ****************************************************
      09. sidebar active
      ****************************************************
      */
      $('button.menu-expand').on('click', function () {
        $('.responsive-header').addClass('menu-open');
        $('.overlay').addClass('show-overlay');
      })
      $('.overlay').on('click', function () {
        $('.responsive-header').removeClass('menu-open');
        $('.overlay').removeClass('show-overlay');
      })


    })(jQuery);
    return () => {

    }
  }, [])

  return (
    <div className='app_slider  d-flex align-items-center fix'>

      <div className="App_shape-circle">
        <img className="shapeAbsoulute scale-upOne d-sm-none d-md-block" src={useBaseUrl('/img/shape/circle.png')} alt="" />
        <img className="shape10" src={useBaseUrl('/img/shape/shape10.png')} alt="" />
        <img className="shape13" src={useBaseUrl('/img/shape/shape13.png')} alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div className="App_shape wow fadeInLeft  d-sm-none d-md-block d-none d-sm-block" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
              <img src={useBaseUrl('/img/shape/mainshape.png')} alt="" />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex align-items-center">
            <div className="app_sliderContent">
              <div className="shapeesright">
                <img className="shape1" src={useBaseUrl('/img/shape/shape1.png')} alt="" />
                <img className="shape2" src={useBaseUrl('/img/shape/shape2.png')} alt="" />
                <img className="shape3" src={useBaseUrl('/img/shape/shape3.png')} alt="" />
                <img className="shape4" src={useBaseUrl('/img/shape/shape4.png')} alt="" />
                <img className="shape5" src={useBaseUrl('/img/shape/shape5.png')} alt="" />
                <img className="shape6" src={useBaseUrl('/img/shape/shape6.png')} alt="" />
                <img className="shape7" src={useBaseUrl('/img/shape/shape7.png')} alt="" />
                <img className="shape8" src={useBaseUrl('/img/shape/shape8.png')} alt="" />
                <img className="shape9" src={useBaseUrl('/img/shape/shape9.png')} alt="" />
                <img className="shape11" src={useBaseUrl('/img/shape/shape5.png')} alt="" />
              </div>
              {/* {siteConfig.title} */}
              <h2 className="hero-two-title"><Translate>Welcome Home !</Translate></h2>
              <p><Translate>Here you can Record and reminders Ingredients.</Translate></p>
              <div className="slider-btn">
                <a className="btn-outline" href="javascript:;"><Translate>Start</Translate></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Food Record and reminders">

      <main>
        <HomepageHeader />
        {/* <HomepageFeatures />
        <HomepageFeatureLeft />
        <HomepageFeatureRight />
        <HomepageDetail />
        <HomepageDownload /> */}
      </main>


    </Layout>
  );
}
