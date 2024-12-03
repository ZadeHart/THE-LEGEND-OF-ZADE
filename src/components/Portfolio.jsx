// import chest from 'assets/chest.gif';
// import weather from 'assets/weather.png';
// import webpage from 'assets/webpage.png';
// import portfolio from 'assets/portfolio.png';
// import employee from 'assets/employee.png';
// import blog from 'assets/blog.png';

// const Projects = () => {
//   const projects = [
//       {
//           title: "Weather Tracker",
//           image: 
//       }
//   ]

// }


export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <img src='public/images/chest.gif'/>
        <section className="card">
        <p>Weather Tracker</p>
        <a href="https://do-you-think-it-will-rain.onrender.com/">
          <img src="public/images/weather.png" alt="" />
        </a>
        </section>

          <div className="main">
            <section className="card">
              <p>Webpage</p>
              <img src="public/images/webpage.png" alt="" />
            </section>
            <section className="card">
              <p>Portfolio</p>
              <img src="public/images/portfolio.png" alt="" />
            </section>
            <section className="card">
              <p>Payroll Tracker</p>
              <img src="public/images/employee.png" alt="" />
            </section>
            <section className="card">
              <p>Blog</p>
              <img src="public/images/blog.png" alt="" />
            </section>
          </div>
    </div>
  );
}
