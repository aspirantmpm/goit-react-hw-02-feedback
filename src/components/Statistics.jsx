
import { FeedbackOptions } from './FeedbackOptions';

export const Statistics = ({
  itemGood,
  itemNeutral,
  itemBad,
  onChangeGood,
  onChangeNeutural,
  onChangeBad,
  feedback,
  positive,
}) => {
  return (
    <div>
      <h2> Please leave feedback</h2>

      <FeedbackOptions
        onChangeGood={onChangeGood}
        onChangeNeutural={onChangeNeutural}
        onChangeBad={onChangeBad}
        itemGood={itemGood}
        itemNeutral={itemNeutral}
        itemBad={itemBad}
      />

      <h2>Statistics</h2>
      <p>Good: {itemGood}</p>
      <p>Neutral: {itemNeutral}</p>
      <p>Bad: {itemBad}</p>
      <p>Total: {feedback()}</p>
      <p>Positive feedback: {positive()}%</p>
    </div>
  );
};
