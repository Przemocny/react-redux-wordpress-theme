import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions as appActions } from '../../stores/app';
import { getHomeData } from '../../common/logic';
import './readme.scss';

import Logo from './logo.png';
import Component from './component.PNG';
import Componen2 from './component2.PNG';
import ScssExample from './scssexample.PNG';

const ReadMe = ({}) => {
  return (
    <div className="container">
      <div className="readme">
        <img className="img" src={Logo} />
        <h3 className="title">
          Welcome to the theme created by Localhost Group.
        </h3>
        <h4 className="title-2">
          I would like to explain to you how this theme works and how the whole
          file structure you see is organized.
        </h4>

        <h5 className="paragraph">
          The main directory contains three subfolders that interest you:
          node_modules, public, and src. Below you will find individual
          configuration files.
        </h5>
        <h5 className="paragraph">
          <strong>node_modules: </strong>This folder contains the modules
          required for the application to function properly. It simply has to be
          there for all application components to work properly.
        </h5>
        <h5 className="paragraph">
          <strong>public: </strong>
        </h5>

        <h5 className="title-2">
          <strong>src: </strong>The src folder is the folder that interests you
          most. It contains the following subfolders
        </h5>
        <p className="paragraph">
          <strong>api: </strong>The api folder, which contains the logic
          responsible for downloading data from the Wordpress API. There is no
          need for you to change anything here.
        </p>
        <h6 className="paragraph">
          <strong>common: </strong>Folder with some common logic
        </h6>
        <h6 className="paragraph">
          <strong>commponents: </strong>The folder you should be most interested
          in. In this folder, each subfolder e.g. attention1 is a single
          component. The structure of a single component is index.js and
          component.scss which contains its CSS style.
        </h6>
        <h6 className="paragraph">
          <strong>global: </strong>The folder where global variables are stored,
          in this case the Wordpress API URL
        </h6>
        <h6 className="paragraph">
          <strong>pages: </strong>The folder pages, contains specific pages such
          as Blog, Post, and Home. In each of these pages, we can place our
          previously prepared components
        </h6>
        <h6 className="paragraph">
          <strong>stores: </strong>Folder stores, contains the logic of ReduxJS
        </h6>
        <h6 className="paragraph">
          <strong>styles: </strong>Folder containing icons, fonts, global css
          style, components css style.
        </h6>

        <h5 className="title-2">
          <strong>The way of building a specific component:</strong>
        </h5>
        <div className="list">
          <ul>
            <li>
              In the components folder, create a new folder with the name of the
              component, in the folder, create two files: index.js and the name
              of the component.scss
            </li>
            <li>
              The picture below shows the construction of a simple component in
              React. You have to specify its name, optionally props that "go"
              inside it and that you can use for your purposes. Then you have to
              use "return" and specify what the component should return.
            </li>
            <img className="img" src={Component}></img>
            <li>
              Then you have to export your component so that other application
              elements can use it.
            </li>
            <li>
              Where you want to use a component, you have to import it and then
              use it by calling its name in the appropriate format shown in the
              image below.{' '}
            </li>
            <img src={Componen2}></img>
            <li>
              In this case I used the SimpleComponent that I prepared, on the
              Home page. Using components independent of others helps to keep
              the whole structure in order. It's simple - because we edit only
              the component we want, without affecting the whole application.
            </li>
            <li>
              The appearance of the components can be adjusted by using the
              appropriate properties that we specify in the scss files of the
              component. For example, the scss file for the current section you
              are reading looks like in the picture below. More examples u can
              find here :{' '}
              <a href="https://www.w3schools.com/css/">CSS Tutorial</a>
            </li>
            <img src={ScssExample}></img>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, componentProps) => {
  return { app: state.App };
};

const mapActionsToDispatch = { ...appActions };

export default connect(mapStateToProps, mapActionsToDispatch)(ReadMe);
