import './style/main.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import NotFound from './components/pages/not_found';
import AboutMe from './components/pages/about_me/about_me';
import Contact from './components/pages/contact';
import Footer from './components/footer'
import Apod from './components/pages/apod/apod';
import Facts from './components/pages/facts/facts';
import News from './components/pages/news';
import Home from './components/pages/home/home';

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact /> 
          <Route path="/home" component={Home} exact />
          <Route path="/about-me" component={AboutMe} exact />
          <Route path="/facts" component={Facts} exact />
          <Route path="/apod" component={Apod} exact />
          <Route path="/news" component={News} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
