import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Main>
       <HashRouter>
          <Routes>
            <Route path="/*" element={
              <HomePage />
            } />
            <Route path="/country/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
       </HashRouter>
      </Main>
    </>
  );
}

export default App;
