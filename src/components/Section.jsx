import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Statistics } from './Statistics';

export const Section = ({
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

      <Notification
        message="There is no feedback"
        itemGood={itemGood}
        itemNeutral={itemNeutral}
        itemBad={itemBad}
        feedback={feedback}
        positive={positive}
      />

      <Statistics
        itemGood={itemGood}
        itemNeutral={itemNeutral}
        itemBad={itemBad}
        feedback={feedback}
        positive={positive}
      />

      {/* <h2>Statistics</h2>
      <p>Good: {itemGood}</p>
      <p>Neutral: {itemNeutral}</p>
      <p>Bad: {itemBad}</p>
      <p>Total: {feedback()}</p>
      <p>Positive feedback: {positive()}%</p> */}
    </div>
  );
};
