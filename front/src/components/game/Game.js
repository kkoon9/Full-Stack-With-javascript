import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <Fragment>
      <h2>이곳은 게임장입니다.</h2>
      <div>
        <Link to="/Multiplication" className="btn btn-dark my-1">
          구구단
      </Link>
      </div>
      <div>
        <Link to="/WordReply" className="btn btn-dark my-1">
          끝말잇기
      </Link>
      </div>
      <div>
        <Link to="/NumberBaseball" className="btn btn-dark my-1">
          숫자야구
      </Link>
      </div>
      <div>
        <Link to="/ResponseCheck" className="btn btn-dark my-1">
          반응속도
      </Link>
      </div>
    </Fragment>
  );
};

export default Game;