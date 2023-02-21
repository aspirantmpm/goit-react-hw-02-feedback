// import {GoodCounter} from './Good'

export const Statistics = ({ itemGood, itemNeutral, itemBad, onChange }) => {
  return (
    <div>
      <h2> Please leave feedback</h2>
      {/* <GoodCounter /> */}
      <button onClick={() => onChange((itemGood += 1))}>Good</button>
      <button onClick={() => onChange((itemNeutral += 1))}>Neutral</button>
      <button onClick={() => onChange((itemBad += 1))}>Bad</button>
      <h2>Statistics</h2>
          <p>Good: { itemGood }</p>
          <p>Neutral: { itemNeutral }</p>
          <p>Bad: { itemBad }</p>
      <p>Total:</p>
      <p>Positive feedback:</p>
    </div>
  );
};


