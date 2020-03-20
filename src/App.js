import React, { Fragment } from 'react';
import QuoteBox from './QuoteBox';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="container">
          <QuoteBox/>
        </div>
      </Fragment>
    )
  }
}

export default App;
