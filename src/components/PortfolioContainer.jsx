import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/About_Me';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact_Me';
import Resume from './pages/Resume';

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
    </div>
  );
}
