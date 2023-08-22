import './App.css';
import { UserList } from './components/UserList';

function App() {
  return (
    <div data-testid="app-wrapper" className="text-left m-0 p0">
      <UserList />
    </div>
  );
}

export default App;
