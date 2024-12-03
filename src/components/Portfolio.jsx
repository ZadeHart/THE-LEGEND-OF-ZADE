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
import chest from '../../public/images/chest.gif';
import weather from '../../public/images/weather.png'
import webpage from '../../public/images/webpage.png';
import portfolio from '../../public/images/portfolio.png'
import employee from '../../public/images/employee.png'
import blog from '../../public/images/blog.png'

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <img src={chest}/>
        <section className="card">
        <p>Weather Tracker</p>
        <a href="https://do-you-think-it-will-rain.onrender.com/">
          <img src={weather} alt="weather app" />
        </a>
        </section>

          <div className="main">
            <section className="card">
              <p>Webpage</p>
              <img src={webpage} alt="webpage" />
            </section>
            <section className="card">
              <p>Portfolio</p>
              <img src={portfolio} alt="portfolio" />
            </section>
            <section className="card">
              <p>Payroll Tracker</p>
              <img src={employee} alt="employee tracker" />
            </section>
            <section className="card">
              <p>Blog</p>
              <img src={blog} alt="blog" />
            </section>
          </div>
    </div>
  );
}
