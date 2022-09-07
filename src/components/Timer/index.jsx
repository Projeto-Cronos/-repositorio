import { useState } from "react";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../../providers/userContext";

const TimerToCount = ({ recordedTime }) => {
  const [timer, setTimer] = useState(<span>00:00:00</span>);
  const [timeInterval, setTimeInterval] = useState(null);
  const [isCounter, setIsCounter] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const { totalTime, setTotalTime } = useContext(Context);

  const intervalRef = useRef(0);

  let hrs = 0;
  let min = 0;
  let sec = 0;

  const startCount = () => {
    setIsCounter(!isCounter);

    // const time_minutes = 0;
    // const time_seconds = 0;
    let elapsedTime = 0;
    // let duration = 0;

    console.log(recordedTime);
    if (recordedTime > 0) {
      elapsedTime = recordedTime;
      intervalRef.current = recordedTime;
    } else {
      elapsedTime = 0;
    }

    // if (time_minutes === 0 && time_seconds === 0) {
    //   elapsedTime = 0;
    // } else {
    //   duration = time_minutes * 60 + time_seconds;
    //   elapsedTime = duration;
    //   intervalRef.current = duration;
    // }

    setTimeInterval(
      setInterval(() => {
        elapsedTime++;
        intervalRef.current++;

        // min = Math.floor(elapsedTime / 60);
        // sec = Math.floor(elapsedTime % 60);

        // // setTotalTime(intervalRef.current);

        // if (min >= 60 || min >= 120) {
        //   elapsedTime -= 3600;
        //   min = 0;
        //   hrs += 1;
        // }
        if (Math.floor(elapsedTime / 3600)) {
          hrs = Math.floor(elapsedTime / 3600);
          console.log({ hrs });
        }

        if (Math.floor((elapsedTime - hrs * 3600) / 60)) {
          min = Math.floor((elapsedTime - hrs * 3600) / 60);
          console.log({ min });
        }

        if (elapsedTime - hrs * 3600 - min * 60) {
          sec = elapsedTime - hrs * 3600 - min * 60;
          console.log({ sec });
        }

        setTimer(
          <span>
            {hrs < 10 ? `0${hrs}` : hrs}:{min < 10 ? `0${min}` : min}:
            {sec < 10 ? `0${sec}` : sec}
          </span>
        );
      }, 1000)
    );
  };

  // console.log(totalTime);

  const resume = () => {
    setIsCounter(true);
    let elapsedTime = 0;

    if (intervalRef.current > 0) {
      elapsedTime = intervalRef.current;
    }

    setTimeInterval(
      setInterval(() => {
        elapsedTime++;
        intervalRef.current++;

        min = Math.floor(elapsedTime / 60);
        sec = Math.floor(elapsedTime % 60);

        // setTotalTime(elapsedTime);

        if (min >= 59) {
          elapsedTime -= 3600;

          hrs += 1;
        }
        setTimer(
          <span>
            {hrs < 10 ? `0${hrs}` : hrs}:{min < 10 ? `0${min}` : min}:
            {sec < 10 ? `0${sec}` : sec}
          </span>
        );
      }, 1000)
    );
  };

  const pauseTimer = () => {
    setTotalTime(intervalRef.current);
    setIsCounter(false);

    setIsPause(true);
    clearInterval(timeInterval);
  };

  const stop = () => {
    setTotalTime(intervalRef.current);
    intervalRef.current = 0;

    clearInterval(timeInterval);

    // const endDate = new Date();

    setTimer(<span>00:00:00</span>);
  };

  return (
    <>
      <div className="boxTimer">
        <span>{timer}</span>
      </div>

      <div className="boxBtn">
        {!isCounter & !isPause ? (
          <button onClick={() => startCount()}>
            <BsFillPlayFill />
          </button>
        ) : (
          <button onClick={() => resume()}>
            <BsFillPlayFill />
          </button>
        )}
        {isCounter ? (
          <button onClick={() => pauseTimer()}>
            <BsPauseFill />
          </button>
        ) : (
          isPause && (
            <button onClick={() => stop()}>
              <BsStopFill />
            </button>
          )
        )}
      </div>
    </>
  );
};
export default TimerToCount;
