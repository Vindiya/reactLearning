import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      strName: "vindiya"
    };
  }

  onGreet() {
    alert('this is alert');
  }

  changeName(name) {
    this.setState({
      strName: name
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={ {backgroundColor: 'red'} }>
          <div className="col-xs-10 col-xs-push-1">   
            <Header homeLink="home"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-push-1">
            <p>the current state name is: {this.state.strName}</p>
            <Home age={3} greet={this.onGreet} changeName={this.changeName.bind(this)}>
              <p>this is a paragraph!</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));