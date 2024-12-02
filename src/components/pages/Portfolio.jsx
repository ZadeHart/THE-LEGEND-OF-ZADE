export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <img src='assets/chest.gif'/>
        <section className="card">
        <p>Weather Tracker</p>
        <a href="https://do-you-think-it-will-rain.onrender.com/">
          <img src="../assets/weather_api.png" alt="" />
        </a>
        </section>

          <div className="main">
            <section className="card">
              <p>Webpage</p>
              <img src="../assets/challenge_01.png" alt="" />
            </section>
            <section className="card">
              <p>Portfolio</p>
              <img src="../assets/challenge_02.png" alt="" />
            </section>
            <section className="card">
              <p>Payroll Tracker</p>
              <img src="../assets/challenge_03.png" alt="" />
            </section>
            <section className="card">
              <p>Blog</p>
              <img src="../assets/challenge_04.png" alt="" />
            </section>
          </div>
    </div>
  );
}
