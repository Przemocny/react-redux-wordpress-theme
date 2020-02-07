import React from 'react';
import { connect } from 'react-redux';
import { actions as appActions } from '../../stores/app';
import { getHomeData } from '../../common/logic';
import { Link } from 'react-router-dom';
import { ReactComponent as Browser14Icon } from './browser-14.svg';

import './attention2.scss';

const Icon = props => {
  const { name = 'iconname', width = 200, height = 200 } = props;
  if (name.includes('browser-14')) {
    return <Browser14Icon {...props} />;
  }
  return null;
};

const Attention2 = props => {
  const { pages, lang } = props.app;
  if (pages.length !== 0) {
    const [keys, home] = getHomeData(pages, lang);
    return (
      <React.Fragment>
        <div className="container attention-2">
          <div className="row">
            <div className="col-md-4">
              <div className="glyph">
                <Icon name={'browser-14'} />
              </div>
            </div>
            <div className="col-md-8">
              <h1 className="title-1">{home.attention2.title}</h1>
            </div>
          </div>
        </div>
        <div className="attention-4">
          <div className="container">
            <div className="motto">
              <h2>
                {'Here is another attention section, u can put here your motto'}
              </h2>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            <Link to="/blog" className="attention-button alt">
              Read about us on blog
            </Link>
          </div>
          <div className="dot"></div>
        </div>
      </React.Fragment>
    );
  }
  return null;
};

const mapStateToProps = (state, componentProps) => {
  return { app: state.App };
};

const mapActionsToDispatch = { ...appActions };

export default connect(mapStateToProps, mapActionsToDispatch)(Attention2);
