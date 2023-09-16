import "./center.css";
const Center = function () {
  return (
    <main className="center">
      <img className="center__img" src="/images/Trailer.png" alt="" />
      <img className="center__playimg" src="images/Play.png" alt="" />
      <h2 className="center__play">Watch Trailer</h2>
      <div className="center__header">
        <h1 className="center__heading">
          Top Gun: Maverick • 2022 • PG-13 • 2h 10m
          <span className="center__actionspan">Action</span>
          <span className="center__actionspan">Drama</span>
        </h1>
      </div>
      <h2 className="center__content">
        After thirty years, Maverick is still pushing the envelope as a top
        naval aviator, but must confront ghosts of his past when he leads TOP
        GUN's elite graduates on a mission that demands the ultimate sacrifice
        from those chosen to fly it.
      </h2>
      <h2 className="center__director">
        Director : <span className="center__span">Joseph Kosinski </span>
      </h2>
      <h2 className="center__writers">
        Writers :
        <span className="center__span">
          {" "}
          Jim Cash, Jack Epps Jr, Peter Craig
        </span>
      </h2>
      <h2 className="center__stars">
        Stars :{" "}
        <span className="center__span">
          Tom Cruise, Jennifer Connelly, Miles Teller
        </span>
      </h2>
      <div className="center__top">
        <button className="center__topbtn">Top rated movie #65</button>
        <p className="center__awards">Awards 9 nominations</p>
        <img className="center__expand" src="/images/Expand Arrow.png" alt="" />
      </div>
      <div>
        <img src="/images/Bookmark.png" alt="" />
        <img src="/images/Star.png" alt="" />
        <p>8.5 | 350k</p>
      </div>
      <button>
        {" "}
        <img src="/images/Two Tickets" alt="" />
        See Showtimes
      </button>
      <button>
        <img src="/images/List" alt="" /> More watch options
      </button>
      <img src="/images/Suggestions.png" alt="" />
      <div>
        <img src="/images/Bookmark.png" alt="" />
        <p>The Best Movies and Shows in September</p>
      </div>
    </main>
  );
};
export default Center;
