import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTo: 0,
      showNav: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    if (window.pageYOffset > 60) {
      this.setState({
        showNav: true
      });
    } else if (window.pageYOffset < 60) {
      this.setState({
        showNav: false
      });
    }
  };

  scrollToPosition = e => {
    const { name } = e.target;
    window.scrollTo(0, parseInt(name));
  };
  render() {
    const { showNav } = this.state;
    return (
      <div>
        {showNav === true
          ? <div className="navbar">
              <button name="120" onClick={this.scrollToPosition}>
                Component1
              </button>
              <button name="920" onClick={this.scrollToPosition}>
                Component2
              </button>
              <button name="1720" onClick={this.scrollToPosition}>
                Component3
              </button>
            </div>
          : null}
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </div>
    );
  }
}

export default App;

class ComponentOne extends Component {
  render() {
    return <div className="first_component">Component One is at 120px</div>;
  }
}

class ComponentTwo extends Component {
  render() {
    return <div className="scnd_component">Component One is at 920px</div>;
  }
}

class ComponentThree extends Component {
  render() {
    return <div className="thrd_component">Component One is at 1720px</div>;
  }
}
