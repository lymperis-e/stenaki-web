import React, { useState, useEffect } from 'react';
import getTimeDifference from '../js/counter'
import { Countdown } from 'react-daisyui';

function OpeningCountdown() {
  const targetDate = '2023-05-29T23:59:59';

  const [timeDifference, setTimeDifference] = useState(getTimeDifference(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeDifference(getTimeDifference(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <>

      <h4>Ανοίγουμε σε: </h4>


      <div className="mr-4 inline">
        <Countdown className="text-xl" value={timeDifference.months} /> μήνες
      </div>

      <div className="mr-4 inline">
        <Countdown className="text-xl" value={timeDifference.days} /> ημέρες
      </div>

      <div className="mr-4 inline">
        <Countdown className="text-xl" value={timeDifference.hours} /> ώρες
      </div>

      <div className="mr-4 inline">
        <Countdown className="text-xl" value={timeDifference.minutes} /> λεπτά
      </div>

      <div className="mr-4 inline">
        <Countdown className="text-xl" value={timeDifference.seconds} /> δευτερόλεπτα
      </div>

    </>
  );
}
export default OpeningCountdown