import React from "react";

export class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.age,
      status:0
    };
    setTimeout(() => {
      this.setState({
        status: 3
      });
    }, 3000);
  }
  makeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentDidMount: ', nextProps);
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate: ', newProps, ' newState: ', newState);
    return true;
  }
  componentWillUpdate(nextProps, nextstate) {
    console.log('componentWillUpdate nextProps: ', nextProps, ' nextstate: ', nextstate);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate prevProps: ', prevProps, ' prevState: ', prevState);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <div>
        <p>state.age of home component {this.state.age}</p>
        <p>state.status of home component {this.state.status}</p>
        <div className="row">
          <button onClick={this.makeOlder.bind(this)} className="btn btn-primary">click me to increase age!</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={this.props.greet} className="btn btn-primary">click me to show alert!</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => this.props.changeName('vikas')} className="btn btn-primary">click me to change name!</button>
        </div>
        <div>
          Following are the children of this component: 
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}