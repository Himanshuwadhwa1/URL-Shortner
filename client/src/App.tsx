import * as React from 'react';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';
import Container from './components/Container/Container';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
