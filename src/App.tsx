import './App.css';
import { UserList } from './components/UserList';
import { UserDetailView } from './components/UserDetailView';
import { NotFound } from './components/NotFound';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <div data-testid="app-wrapper" className="w-full text-left m-0 p0 app-wrapper">
      <Routes location={location} key={location.pathname}>
        <Route index element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetailView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
