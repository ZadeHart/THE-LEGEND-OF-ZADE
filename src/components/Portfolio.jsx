export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <img src='/.netlify/images?url=/assets/chest.gif'/>
        <section className="card">
        <p>Weather Tracker</p>
        <a href="https://do-you-think-it-will-rain.onrender.com/">
          <img src="/.netlify/images?url=/assets/weather_api.png" alt="" />
        </a>
        </section>

          <div className="main">
            <section className="card">
              <p>Webpage</p>
              <img src="/.netlify/images?url=/assets/challenge_01.png" alt="" />
            </section>
            <section className="card">
              <p>Portfolio</p>
              <img src="/.netlify/images?url=/assets/challenge_02.png" alt="" />
            </section>
            <section className="card">
              <p>Payroll Tracker</p>
              <img src="/.netlify/images?url=/assets/challenge_03.png" alt="" />
            </section>
            <section className="card">
              <p>Blog</p>
              <img src="/.netlify/images?url=/assets/challenge_04.png" alt="" />
            </section>
          </div>
    </div>
  );
}
