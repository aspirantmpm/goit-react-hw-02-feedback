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
  return (
    <div>
      <h2>Statistics</h2>
      <p> Good: {itemGood} </p>
      <p> Neutral: {itemNeutral} </p>
      <p>Bad: {itemBad} </p>
      <p>Total: {feedback()} </p>
      <p>Positive feedback: {positive()}% </p>
    </div>
  );
};
