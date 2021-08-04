import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>this is Footer {this.props.children}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(React.createFactory('div')())
    console.log(React.createFactory(Footer)())
  }

  render() {
    return (
      <div>
        <Footer>aaaaa</Footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
