import React, { Fragment } from 'react';
import QuoteBox from './QuoteBox';

class App extends React.Component {

  // themes = ['black', 'grey', 'red', 'green', 'blue'];

  constructor(props) {
    super(props);
    this.themes = ['black', 'grey', 'red', 'green', 'blue'];
    this.state = {
      currentTheme: 'black'
    }
  }

  handleThemeChange = () => {
    // const themes = this.themes;
    // console.log(themes);
    const randTheme = Math.floor(Math.random() * this.themes.length);
    this.setState({currentTheme:this.themes[randTheme]})
  }

  render() {
    return (
      <Fragment>
        <div className={'container' + ' ' + this.state.currentTheme} >
          <QuoteBox currentTheme={this.state.currentTheme} handleThemeChange={this.handleThemeChange} />
        </div>
      </Fragment>
    )
  }
}

export default App;
