import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Multiplication from './Multiplication';

const Game = () => {
  return (
    <Fragment>
      <h2>이곳은 구구단 게임장입니다.</h2>
      <Link to="/Game" className="btn btn-light">
        이전으로
      </Link>
    </Fragment>
  );
};

export default Game;