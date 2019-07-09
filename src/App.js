import React, { PureComponent, Fragment } from "react";
import "@/assets/scss/base.css";

import { HashRouter, Route } from "react-router-dom";


import { Provider } from "react-redux";
import store from "./store";

import Loadable from "react-loadable";

const MyLoadingComponent = props => {
  if (props.isLoading) {
      return <div>Loading...</div>
  }
  else if (props.error) {
      return <div>Error! <button onClick={ props.retry }>重载</button></div>
  }
  else {
      return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import('./page/home/home.jsx'),
  loading: MyLoadingComponent,
});




class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <Fragment>
              <Route path="/" component={AsyncHome} exact />
            </Fragment>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;