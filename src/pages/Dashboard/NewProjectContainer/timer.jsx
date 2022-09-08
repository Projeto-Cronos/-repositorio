import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { useRef } from "react";

const TimerToCount = () => {
  const [timer, setTimer] = useState(<span>00:00:00</span>);
  const [timeInterval, setTimeInterval] = useState(null);
  const [countIntervalResume, setCountIntervalResume] = useState(0);
  const [isCounter, setIsCounter] = useState(false);
  const [time, setTime] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [tempo, setTempo] = useState({ horas: 0, minutos: 0, segundos: 0 });

  let sec = tempo.segundos;
  let hrs = tempo.horas;
  let min = tempo.segundos;

  const schema = yup.object({
    hours: yup.number("coloque um numero").required("horas"),
    minutes: yup.number("coloque um numero").required("minutos"),
    seconds: yup.number("coloque um numero").required("segundos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const intervalRef = useRef();
  function startCount() {
    setIsCounter(!isCounter);
    const time_minutes = 0;
    const time_seconds = 0;

    const duration = time_minutes * 60 + time_seconds;

    let hrs = 0;
    let min = 0;
    let sec = 0;

    let elapsedTime = duration;

    setTimeInterval(
      setInterval(() => {
        elapsedTime++;
        min = parseInt(elapsedTime / 60);
        sec = parseInt(elapsedTime % 60);

        setTime(elapsedTime);
        console.log(time);

        min === 60 && hrs++;

        setTimer(
          <span>
            {hrs < 10 ? "0" + hrs : hrs}:{min < 10 ? "0" + min : min}:
            {sec < 10 ? "0" + sec : sec}
          </span>
        );
      }, 10)
    );
  }
  // setTimeInterval(coutnInterval)
  // coutnInterval()
  // !isCounter && clearInterval(coutnInterval)

  console.log(time);

  //   function timerToCount (){
  //     // const {minutes, seconds, hours} = data
  //     setIsCounter(!isCounter)
  //     const time_minutes = 0;
  //     const time_seconds = 0;

  //     const duration = (time_minutes*60) + time_seconds
  //     // console.log(duration )

  //     startCount(duration)
  //   }

  function resume() {
    let hrs = 0;
    let min = 0;
    let sec = 0;

    let elapsedTime = time;

    setTimeInterval(
      setInterval(() => {
        elapsedTime++;
        min = parseInt(elapsedTime / 60);
        sec = parseInt(elapsedTime % 60);

        setTime(elapsedTime);

        min === 60 && hrs++;

        setTimer(
          <span>
            {hrs < 10 ? "0" + hrs : hrs}:{min < 10 ? "0" + min : min}:
            {sec < 10 ? "0" + sec : sec}
          </span>
        );
      }, 10)
    );
    // countInterval()
    setCountIntervalResume("vai");
  }

  console.log(countIntervalResume);

  function pauseTimer() {
    // isCounter && setIsCounter(!isCounter)

    clearInterval(timeInterval);
    // isCounter && setIsPause(!isPause)
  }

  function pauseResume() {
    isCounter && setIsPause(!isPause);
    clearInterval(countIntervalResume);
  }
  return (
    <>
      <div className="boxTimer">
        <span>{timer}</span>
      </div>

      <div className="boxBtn">
        {!isCounter & !isPause ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              startCount();
            }}
          >
            <BsFillPlayFill />
            {/* Play */}
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              resume();
            }}
          >
            <BsFillPlayFill />
            {/* Return */}
          </button>
        )}
        {!isPause && (
          <button
            onClick={(e) => {
              e.preventDefault();
              pauseTimer();
            }}
          >
            <BsPauseFill />
            {/* Pause */}
          </button>
        )}
      </div>
    </>
  );
};

export default TimerToCount;
