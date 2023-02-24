import { Buttons } from './style';
import { Button } from './style';

export const FeedbackOptions = ({
  itemGood,
  itemNeutral,
  itemBad,
  onChangeGood,
  onChangeNeutural,
  onChangeBad,
//   feedback,
//   positived,
}) => {
  return (
    <Buttons>
      <Button onClick={() => onChangeGood((itemGood += 1))}>Good</Button>
      <Button onClick={() => onChangeNeutural((itemNeutral += 1))}>
        Neutral
      </Button>
      <Button onClick={() => onChangeBad((itemBad += 1))}>Bad</Button>
    </Buttons>
  );
};
