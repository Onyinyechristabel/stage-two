import "./list.css";
const List = function () {
  return (
    <section className="Lists">
      <div className="List__heading">
        <h1 className="List__header">Featured Movie</h1>
        <p className="List__view">
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
              stroke="#B91C1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
      <section className="Cards">
        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Strangerthing.png" alt="" />
            <p className=" List__date">USA, 2016 - Current</p>
            <h1 className="List__tittle"> Stranger Things</h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">86.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">97%</p>
              </div>
            </section>
            <p className="List__feature">Action, Adventure, Horror</p>
          </div>
        </main>

        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Batman.png" alt="" />
            <p className=" List__date">USA, 2016 - Current</p>
            <h1 className="List__tittle"> Bat-Man</h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">86.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">97%</p>
              </div>
            </section>
            <p className="List__feature">Action, Adventure, Horror</p>
          </div>
        </main>

        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Dontbreath.png" alt="" />
            <p className=" List__date">USA, 2005</p>
            <h1 className="List__tittle">Don't Breathe</h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">82.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">97%</p>
              </div>
            </section>
            <p className="List__feature">Action, Adventure, Horror</p>
          </div>
        </main>

        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Shangchi.png" alt="" />
            <p className=" List__date">USA, 2016 - Current</p>
            <h1 className="List__tittle">
              {" "}
              Shang-Chi and the Legend of the Ten Rings
            </h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">86.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">97%</p>
              </div>
            </section>
            <p className="List__feature">Action, Adventure, Horror</p>
          </div>
        </main>

        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Strangerthing.png" alt="" />
            <p className=" List__date">USA, 2016 - Current</p>
            <h1 className="List__tittle"> Stranger Things</h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">86.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">70%</p>
              </div>
            </section>
            <p className="List__feature">Action, Adventure</p>
          </div>
        </main>

        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Spiderman.png" alt="" />
            <p className=" List__date">USA, 2018</p>
            <h1 className="List__tittle">
              {" "}
              Spider-Man : Into The Spider Verse
            </h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">82.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">87%</p>
              </div>
            </section>
            <p className="List__feature">Animation, Action, Adventure</p>
          </div>
        </main>

        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Dunner.png" alt="" />
            <p className=" List__date">USA, 2017</p>
            <h1 className="List__tittle">Dunkirk</h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">78.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">94%</p>
              </div>
            </section>
            <p className="List__feature">Action, Drama, History</p>
          </div>
        </main>

        <main className="List__main">
          <div>
            <img className="List__img" src="/images/Dune.png" alt="" />
            <p className=" List__date">USA, 2021</p>
            <h1 className="List__tittle"> Dune</h1>
            <section className="List__rating">
              <div className="List__imob">
                <img className="List__imobimg" src="/images/imob.png" alt="" />
                <p className="List__score">84.0 / 100</p>
              </div>
              <div className="List__tomato">
                <img
                  className="List__tomatoimg"
                  src="/images/tomato.png"
                  alt=""
                />
                <p className="List__percent">75%</p>
              </div>
            </section>
            <p className="List__feature">Action, Adventure, Thriller</p>
          </div>
        </main>
      </section>
    </section>
  );
};
export default List;
