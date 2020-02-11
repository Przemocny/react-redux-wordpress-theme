import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions as appActions } from '../../stores/app';
import { getHomeData } from '../../common/logic';
import './readme.scss';

import Logo from './logo.png';

const ReadMe = ({}) => {
  return (
    <div className="container">
      <div className="readme">
        <img className="img" src={Logo} />
        <h3 className="title">
          Welcome to the theme created by Localhost Group.
        </h3>
        <h4 className="title-2">How to use our theme</h4>

        <h5 className="paragraph">
          The main directory contains three subfolders that interest you:
          node_modules, public, and src. Below you will find individual
          configuration files.
        </h5>
        <h6 className="paragraph">
          <h5 className="title">
            <strong>Folder src: </strong>This folder contains the main structure
          </h5>
        </h6>

        <p className="paragraph">
          <strong>api: </strong>The api folder, which contains the logic
          responsible for downloading data from the Wordpress API.
        </p>
        <h6 className="paragraph">
          <strong>common: </strong>Folder with some common logic like
          getPageData() from API
        </h6>
        <h6 className="paragraph">
          <strong>commponents: </strong>Component storage folder. Each subfolder
          e.g. attention1 is a single component. The structure of a single
          component is index.js and component.scss which contains its CSS style.
        </h6>
        <h6 className="paragraph">
          <strong>global: </strong>The folder where global variables are stored,
          in this case the Wordpress API URL
        </h6>
        <h6 className="paragraph">
          <strong>pages: </strong>A folder in which specific pages are stored.
          The pages are built from components.
        </h6>
        <h6 className="paragraph">
          <strong>stores: </strong>redux js store
        </h6>
        <h6 className="paragraph">
          <strong>styles: </strong>Folder to store css files, icons, fonts
        </h6>
        <h6 className="paragraph">
          <h5 className="title">
            <strong>Layout: </strong>The Layout.js file is responsible for the
            layout. Some of the components we used when building our site were
            left for use by people using this theme, for example the Menu
            component which is now commented on and ready to use.
          </h5>
          <h5 className="title">
            The site built using this theme{' '}
            <a href="academy.localhost-group.com">
              academy.localhost-group.com
            </a>
          </h5>
          <h5 className="title">Links to repositories:</h5>
          <a href="https://github.com/Przemocny/react-redux-wordpress-theme">
            https://github.com/Przemocny/react-redux-wordpress-theme
          </a>
        </h6>
      </div>
    </div>
  );
};

const mapStateToProps = (state, componentProps) => {
  return { app: state.App };
};

const mapActionsToDispatch = { ...appActions };

export default connect(mapStateToProps, mapActionsToDispatch)(ReadMe);
