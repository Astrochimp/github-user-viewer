import './App.css';
import { UserList } from './components/UserList';

function App() {
  return (
    <div data-testid="app-wrapper" className="w-full text-left m-0 p0 app-wrapper">
      <UserList />
    </div>
  );
}

export default App;
