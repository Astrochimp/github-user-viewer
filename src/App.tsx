import React, { useState } from 'react';
import './App.css';
import { UserList } from './components/UserList';
import { UserDetail } from './components/UserDetail';

function App() {

  const [setGhUserList, ghUserList] = useState<[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>

      <UserList users={setGhUserList} />

      <UserDetail userView={ } />
    </div>
  );
}

export default App;
