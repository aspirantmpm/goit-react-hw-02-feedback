import { Notification } from "./Notification";

export const Statistics = ({
  itemGood,
  itemNeutral,
  itemBad,
  //   onChangeGood,
  //   onChangeNeutural,
  //   onChangeBad,
  feedback,
  positive,
}) => {
  // console.log(feedback());
  return (
    // console.log({ feedback })
    <div>
      <h2>Statistics</h2>
      
      {feedback() === 0 ? 
        <Notification message="There is no feedback" />
       : 
        <div>
          <p> Good: {itemGood} </p>
          <p> Neutral: {itemNeutral} </p>
          <p>Bad: {itemBad} </p>
          <p>Total: {feedback()} </p>
          <p>Positive feedback: {positive()}% </p>
        </div>
      }
    </div>
  );
};
