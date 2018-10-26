import React from 'react';
import { TEXT_COPY } from './../settings/language-and-text';
import CheckBoxOffIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOnIcon from '@material-ui/icons/CheckBox';

const PreloaderScreen = ({
  appLoader,
}) => {
  return(
    <section className="app-preloder">
      <div className="app-preloder__frame">
        <h3>{ TEXT_COPY.gen.loading } ...</h3>
        <ul>
          <li className={appLoader.appInfo ? 'active' : ''}>
            {
              appLoader.appInfo ?  <CheckBoxOnIcon className="app-preloder__icon" /> : <CheckBoxOffIcon className="app-preloder__icon" />
            }
            { TEXT_COPY.appInit.settings }
          </li>
          <li className={appLoader.userInfo ? 'active' : ''}>
            {
              appLoader.userInfo ?  <CheckBoxOnIcon className="app-preloder__icon" /> : <CheckBoxOffIcon className="app-preloder__icon" />
            }
            { TEXT_COPY.appInit.userInfo }
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PreloaderScreen;
