import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { actions as appActions } from '../../stores/app';
import { getHomeData } from '../../common/logic';

import './mentors.scss';

const Mentor = ({ name, bio, picture, direction, button, url }) => {
    return (
        <div>
            <div className="description">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-xs-2">
                        <img className="icon" src={picture} />
                    </div>
                    <div className="col-md-8 col-xs-8">
                        <h3 className="name">{name}</h3>
                        <h4 className="direction">{direction}</h4>
                        <h4 className="label">{bio}</h4>
                        <a href={url} target="_blank" className='mentors-button alt'>
                        {button}
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Mentors = props => {
    const { pages, lang } = props.app;
    if (pages.length !== 0) {
        const [keys, home] = getHomeData(pages, lang);
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 300,
            autoplaySpeed: 5000,
            cssEase: 'ease-in-out',
        };
        return (
            <div className="mentors">
                <div className="container">
                    <div className="title">{home.mentors.title}</div>
                    <Slider {...settings}>
                        {home.mentors['mentors-values'].map((el, k)=>{
                            return (
                                <div key={k}>
                                    <Mentor {...el} />
                                </div>
                            )
                        })}
                    </Slider>
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

export default connect(mapStateToProps, mapActionsToDispatch)(Mentors);

