import React, { Fragment } from "react";
import QuoteBox from "./QuoteBox";

const themes = ["black", "grey", "red", "green", "blue"];
class App extends React.Component {
  state = {
    currentTheme: "black",
  };

  handleThemeChange = () => {
    const randTheme = Math.floor(Math.random() * themes.length);
    this.setState({ currentTheme: themes[randTheme] });
  };

  render() {
    return (
      <Fragment>
        <div className={`container ${this.state.currentTheme}`}>
          <QuoteBox
            currentTheme={this.state.currentTheme}
            handleThemeChange={this.handleThemeChange}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
