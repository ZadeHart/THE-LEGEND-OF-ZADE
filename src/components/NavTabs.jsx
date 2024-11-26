// import { Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <body>
        <header>
          <h1>Z.A.De Hart</h1>
            <nav>
                <ul className="nav nav-tabs">
                    <a
                      href="#home"
                      onClick={() => handlePageChange('Home')}
                      className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                      About Me
                    </a>
                    <a
                      href="#about"
                      onClick={() => handlePageChange('About')}
                      className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                      Portfolio
                    </a>
                    <a
                      href="#blog"
                      onClick={() => handlePageChange('Blog')}
                      className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                    >
                      Contact Me
                    </a>
                    <a
                      href="#contact"
                      onClick={() => handlePageChange('Contact')}
                      className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                      Resume
                    </a>
                </ul>
              </nav>
        </header>
        {/* <footer className="footer">
            <Link to="https://github.com/ZadeHart">
                <img src="" alt="" />
            </Link>
            <Link to="https://www.linkedin.com/in/zachary-de-hart-29a1a481/">
            <img src="" alt="" />
            </Link>
            <Link to="https://app.slack.com/client/T07AQPA57QT/C07AAAZGXGF">
            <img src="" alt="" />
            </Link>
        </footer> */}
    </body>
  );
}

export default NavTabs;
