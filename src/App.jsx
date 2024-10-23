import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import { useSpring, animated } from 'react-spring';

const App = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fade} className="App">
      <Header />
      <Features />
      <Footer />
    </animated.div>
  );
};

export default App;
