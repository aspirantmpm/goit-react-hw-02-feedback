import { Statistics } from './Statistics';

export const Notification = (
  message,
  feedback,
  itemGood,
  itemNeutral,
  itemBad,
  positive
) => {
    let back = 0 ;
    if (back === 0) {
        console.log(back)
        return <p>{message}</p>;
    } 
        return (
          <div>
            <p>Ok</p>
            <Statistics
              itemGood={itemGood}
              itemNeutral={itemNeutral}
              itemBad={itemBad}
              feedback={feedback}
              positive={positive}
            />
          </div>
        );
    
};
