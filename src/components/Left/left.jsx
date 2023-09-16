import "./left.css";
const Left = function () {
  return (
    <div className="left">
      <div className="left__moviebox">
        <img className="left__box" src="/images/tv.png" alt="" />
        <h1 className="left__movie">MovieBox</h1>
      </div>
      <div className="left__icon">
        <img className="left__icons" src="/images/Home.png" alt="" />
        <p className="left__p">Home</p>
      </div>
      <div className="left__icon">
        <img className="left__icons" src="/images/Movie Projector.png" alt="" />
        <p className="left__p">Movies</p>
      </div>
      <div className="left__icon">
        <img className="left__icons" src="/images/TV Show.png" alt="" />
        <p className="left__p">TV Series</p>
      </div>
      <div className="left__icon">
        <img className="left__icons" src="/images/Calendar.png" alt="" />
        <p className="left__p">Upcoming</p>
      </div>
      <div className="left__information">
        <h4 className="left__people">
          Play movie quizes and earn free tickets
        </h4>
        <p className="left__player">50k people are playing now</p>
        <button className="left__btn">Start playing</button>
      </div>
      <div className="left__icon">
        <img className="left__icons" src="/images/Logout.png" alt="" />
        <p className="left__p">Log out</p>
      </div>
    </div>
  );
};
export default Left;
