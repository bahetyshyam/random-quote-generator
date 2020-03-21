import React from 'react';
import Button from './Button';

class QuoteBox extends React.Component {

    state = {
        result: undefined,
        currentQuote: '',
        currentAuthor: '',
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => response.json())
            .then(result => this.setState({ result, currentQuote: result.quotes[0].quote, currentAuthor: result.quotes[0].author }));
    }

    handleNewQuote = (event) => {
        this.props.handleThemeChange();
        const randQuote = this.state.result && Math.floor(Math.random() * this.state.result.quotes.length);
        this.setState({
            currentQuote: this.state.result.quotes[randQuote].quote,
            currentAuthor: this.state.result.quotes[randQuote].author
        })
    }


    render() {
        return (
            <div className="quote-box">
                <div className="quote-text">
                    <i className="fas fa-quote-left"></i>
                    <span>
                        {this.state.currentQuote}
                    </span>
                </div>
                <div className="quote-author">
                    - {this.state.currentAuthor}
                </div>

                <div className="buttons">
                    <Button currentTheme={this.props.currentTheme} float={"left"}>A</Button>
                    <Button currentTheme={this.props.currentTheme} float={"left"}>B</Button>
                    <Button currentTheme={this.props.currentTheme} onClick={this.handleNewQuote} float={"right"} marginRight={0}>New Quote</Button>
                </div>
            </div>
        )
    }
}

export default QuoteBox;