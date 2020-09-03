import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Multiplication = () => {
  const [gugudanState, setGugudanState] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: ''
  });
  const onChange = (e) => {
    setGugudanState({
      ...gugudanState,
      value: e.target.value
    })
  }
  const onSubmit = (e) => {
    //e.preventdefault();
    if (gugudanState.first * gugudanState.second === parseInt(gugudanState.value)) {
      setGugudanState({
        ...gugudanState,
        value: '',
        result: "정답입니다!"
      })
    } else {
      setGugudanState({
        ...gugudanState,
        value: "",
        result: "땡"
      })
    }
    e.preventDefault();
  }
  const onClick = (e) => {
    setGugudanState({
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: ""
    })
  }
  return (
    <Fragment>
      <h2>이곳은 구구단 게임장입니다.</h2>
      <div>{gugudanState.first} 곱하기 {gugudanState.second}는?</div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="number" value={gugudanState.value} onChange={(e) => onChange(e)} />
        <button>입력!</button>
      </form>
      <div>{gugudanState.result}</div>
      <button className="btn btn-light" onClick={(e) => onClick(e)}>
        다음문제
      </button>
      <Link to="/Game" className="btn btn-light">
        이전으로
      </Link>
    </Fragment >
  );
};

export default Multiplication;