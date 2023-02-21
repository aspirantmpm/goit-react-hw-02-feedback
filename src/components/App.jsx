import { Component } from 'react';
import { GlobalStyle } from './Globalstyle';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChange = (itemGood, itemNeutral, itemBad) => {
    console.log(itemGood, itemNeutral, itemBad);
    this.setState({ good: itemGood, neutral: itemNeutral, bad: itemBad });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <GlobalStyle />
        <Statistics
          itemGood={this.state.good}
          itemNeutral={this.state.neutral}
          itemBad={this.state.bad}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
