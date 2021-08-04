import React from "react";
import ReactDOM from "react-dom";

class ChildCmp extends React.Component {
  render() {
    return <div> {this.props.childMessage} </div>;
  }
}

class ExampleApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "no message" };
  }

  componentWillMount() {
    //...
  }

  componentDidMount() {
    /* setTimeout(()=> {
            this.setState({ message: 'timeout state message' });
        }, 1000); */
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    //...
  }

  componentWillReceiveProps(nextProps) {
    //...
  }

  componentWillUnmount() {
    //...
  }

  onClickHandler() {
    /* this.setState({ message: 'click state message' }); */
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler.bind(this)}>
          {" "}
          set state button{" "}
        </button>
        <ChildCmp childMessage={this.state.message} />
        And some text as well!
      </div>
    );
  }
}

ReactDOM.render(
  <ExampleApplication hello={"world"} />,
  document.getElementById("container"),
  function () {}
);
