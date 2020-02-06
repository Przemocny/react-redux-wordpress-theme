import React from 'react';
import { connect } from 'react-redux';
import { actions as appActions } from '../../stores/app';
import { getHomeData } from '../../common/logic';

import './paths.scss';

const PathItem = ({ title, items }) => {
    return (
        <div className="item">
            <h3 className="title">{title}</h3>
            {items.map((el, k) => {
                return (
                    <h4 className="label" key={k}>
                        {el.title}
                    </h4>
                );
            })}
        </div>
    );
};
const PathSection = ({ home }) => {
    return (
        <div className="paths">
            <div className="container">
                <div className="title">{home.paths.title}</div>
                <div className="paths-inner">
                    <div className="row justify-content-center">
                        <div className="wrapper col-md-6 col-xs-12">
                            <PathItem
                                title={home.paths.path1.title}
                                items={home.paths.path1['path1-items']}
                            />
                            <a
                                href={home.paths.button.url}
                                className="paths-button alt d-none"
                            >
                                {home.paths.button.label}
                            </a>
                            <a href="#" className="paths-button alt d-none">
                                Python placeholder
              </a>
                        </div>
                        <div className="wrapper col-md-6 col-xs-12">
                            <PathItem
                                title={home.paths.path2.title}
                                items={home.paths.path2['path2-items']}
                            />
                            <a href="#" className="paths-button alt d-none">
                                Data Science placeholder
              </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChoiceSection = ({ home }) => {
    return (
        <div className="choice">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-xs-12">
                        <h3 className="title">{home.choice.title}</h3>
                        <h4 className="title2">{home.choice.title2}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Paths = props => {
    const { pages, lang } = props.app;
    if (pages.length !== 0) {
        const [keys, home] = getHomeData(pages, lang);
        return (
            <React.Fragment>
                <PathSection home={home} />
                <ChoiceSection home={home} />
            </React.Fragment>
        );
    }
    return null;
};

const mapStateToProps = (state, componentProps) => {
    return { app: state.App };
};

const mapActionsToDispatch = { ...appActions };

export default connect(mapStateToProps, mapActionsToDispatch)(Paths);
