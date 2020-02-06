import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { actions as appActions } from '../../stores/app';
import { getHomeData } from '../../common/logic';

import './testimonials.scss';

const SimpleSlider = ({ label, author, path, avatar }) => {
  return (
    <div>
      <div className="item">
        <h4 className="label">{label}</h4>
      </div>
      <div className="row">
        <div className="col-md-2 col-xs-2">
          <img className="icon" src={avatar} />
        </div>
        <div className="col-md-10 col-xs-10">
          <h4 className="author">{author}</h4>
          <h4 className="path">{path}</h4>
        </div>
      </div>
    </div>
  );
};

const Testimonials = props => {
  const { pages, lang } = props.app;
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 400,
      autoplaySpeed: 5000,
      cssEase: 'ease-in-out'
    };
    return (
      <div id="testimonials" className="testimonials">
        <div className="container">
          <h3 className="title">{home['reviews-list'].title}</h3>
          <div className="testimonials-inner">
            <Slider {...settings}>
              {home['reviews-list'].reviews.map((el, k) => {
                return (
                  <div key={k}>
                    <SimpleSlider {...el} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state, componentProps) => {
  return { app: state.App };
};

const mapActionsToDispatch = { ...appActions };

export default connect(mapStateToProps, mapActionsToDispatch)(Testimonials);
