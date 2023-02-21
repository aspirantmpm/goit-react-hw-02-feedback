// import {GoodCounter} from './Good'

export const Statistics = ({
  itemGood,
  itemNeutral,
  itemBad,
  onChangeGood,
  onChangeNeutural,
  onChangeBad,
  feedback,
}) => {
  return (
    <div>
      <h2> Please leave feedback</h2>
      {/* <GoodCounter /> */}
      <button onClick={() => onChangeGood((itemGood += 1))}>Good</button>
      <button onClick={() => onChangeNeutural((itemNeutral += 1))}>
        Neutral
      </button>
      <button onClick={() => onChangeBad((itemBad += 1))}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {itemGood}</p>
      <p>Neutral: {itemNeutral}</p>
      <p>Bad: {itemBad}</p>
      <p>Total: {console.log(feedback)}</p>
      <p>Positive feedback:</p>
    </div>
  );
};
