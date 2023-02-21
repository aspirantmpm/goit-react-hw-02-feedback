import { Component } from 'react';
import { GlobalStyle } from './Globalstyle';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeGood = itemGood => {
    console.log(itemGood);
    this.setState({ good: itemGood});
  };

  onChangeNeutral = itemNeutral => {
    console.log(itemNeutral);
    this.setState({ neutral: itemNeutral });
  };

  onChangeBad = (itemBad) => {
    console.log( itemBad);
    this.setState({ bad: itemBad });
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
          onChangeGood={this.onChangeGood}
          onChangeNeutural={this.onChangeNeutral}
          onChangeBad={this.onChangeBad}
        />
      </div>
    );
  }
}
