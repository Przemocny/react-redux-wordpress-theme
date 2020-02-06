import React from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
import {goToId} from '../Menu'
import { actions as appActions } from '../../stores/app';
import { getHomeData } from '../../common/logic';
import { ReactComponent as ComputerIcon } from './computer-4.svg';
import { ReactComponent as Laptop11Icon } from './laptop-11.svg';

import './how.scss';

const Icon = props => {
    const { name = 'computer-4', width = 200, height = 200 } = props;
    return <Laptop11Icon {...props} />;
};

const Item = ({ label, icon, index }) => {
    return (
        <div className="item">
            <div className="row">
                <div className="col-md-2 col-xs-2">
                    <div className="item-icon">
                     {index+1}
                    </div>
                </div>
                <div className="col-md-10 col-xs-10">
                    <h4 className="subtitle">{label}</h4>
                </div>
            </div>
        </div>
    );
};

const HowToStart = props => {
    const { pages, lang } = props.app;
    if (pages.length !== 0) {
        const [keys, home] = getHomeData(pages, lang);
        return (
            <div className="how">
                <div className="container">
                    <h3 className="title">{home['how-to-start'].title}</h3>
                    <div className="items">
                        <div className="row justify-content-center">
                            {home['how-to-start']['start-values'].map((el, k) => {
                                return (
                                    <div className="col-md-12 col-xs-12" key={k}>
                                        <Item {...el} index={k}/>
                                    </div>
                                );
                            })}
                            <div className='col-md-6 col-xs-12'>

                            <Link
                            to={{
                              pathname: '/',
                              hash: '#contact',
                            }}
                            title={'Arrange videoconference with mentor'}
                            onClick={() => {
                              goToId('#contact')
                            }}
                            className='how-button alt'
                          >
                          Arrange videoconference with mentor
                          </Link>
                        </div>
                        </div>
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

export default connect(mapStateToProps, mapActionsToDispatch)(HowToStart);
