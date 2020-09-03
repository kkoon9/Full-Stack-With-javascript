import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Multiplication from './Multiplication';

const Game = () => {
  return (
    <Fragment>
      <h2>이곳은 게임장입니다.</h2>
      <Link to="/Multiplication" className="btn btn-light">
        구구단
      </Link>
    </Fragment>
  );
};

export default Game;