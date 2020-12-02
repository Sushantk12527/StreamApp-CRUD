import React, { Component } from "react";
/* we will be replacing browserrouter with router as we are giving a manual history to it. */
//import { BrowserRouter, Route } from "react-router-dom";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "../Components/streams/StreamCreate";
import StreamDelete from "../Components/streams/StreamDelete";
import StreamEdit from "../Components/streams/StreamEdit";
import StreamList from "../Components/streams/StreamList";
import StreamShow from "../Components/streams/StreamShow";
import history from "../history";

import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
