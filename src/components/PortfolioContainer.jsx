import { useState } from 'react';
import NavTabs from './Header';
import AboutMe from './About_Me';
import Portfolio from './Portfolio';
import Contact from './Contact_Me';
import Resume from './Resume';
import Footer from './Footer'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <AboutMe />;
    }
    if (currentPage === 'About') {
      return <Portfolio />;
    }
    if (currentPage === 'Blog') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer/>
    </div>
  );
}


