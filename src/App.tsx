import { Routes,Navigate, Route, Link } from 'react-router-dom';

import Container from './components/Container';
import PhotoContextProvider from './context/PhotoContext';

function App() {
  return (
    <PhotoContextProvider >
        <Routes >
            <Route path='/snapSearch/mountain' element={ <Container/> } />
            <Route path='/snapSearch' element={ <Container />}>
                <Route path=':searchQuery' element={ <Container/> } />
            </Route>
            <Route path='/' element={ <Navigate to="/snapSearch/mountain" />} />
        </Routes>
    </PhotoContextProvider>
  );
}

export default App;
