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

const FooterEnhance = React.createElement(Footer, null, "0000000");

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Footer>aaaaa</Footer>
        {FooterEnhance}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
