import { Routes,Navigate, Route, Link } from 'react-router-dom';

import Container from './components/Container';
import PhotoContextProvider from './context/PhotoContext';

function App() {
  return (
    <PhotoContextProvider >
        <Routes>
            <Route path='/:searchQuery' element={ <Container/> } />
            <Route path='/' element={ <Navigate to="/mountain" />} />
        </Routes>
    </PhotoContextProvider>
  );
}

export default App;
