import './App.css';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import LoginControls from './components/LoginControls';
import HeroSection from './components/HeroSection';
import NewsletterForm from './components/NewsletterForm';
import StatsBar from './components/StatsBar';

function App() {
  return (
    <div className="App">
      <nav>
        <NavigationBar />
        <SearchBar />
        <LoginControls />
      </nav>
      <HeroSection />
      <NewsletterForm />
      <footer>
        <hr />
        <StatsBar />
      </footer>
    </div>
  );
}

export default App;
