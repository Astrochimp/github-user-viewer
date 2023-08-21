import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState<[]>([]);
  const user = 'Astrochimp';

  useEffect(() => {
    async function getUser() {
      const res = await fetch(`https://api.github.com/users/${user}/repos?page=1&per_page=20&sort=updated`);
      const data = await res.json();
      setRepos(data);
    }

    getUser();
  }, []);

  return (
    <div>
      <h1>{user} Repos</h1>
      <div className=''>
        {repos.map((rep) => {
          console.log('rep', rep);
          return (
            <>
              <h2>{rep.full_name}</h2>
              <p>
                <a href={rep.html_url} target="_blank">{rep.html_url}</a>
              </p>
              <div>{rep.language}</div>
              <div>⭐️{rep.stargazers_count}</div>
            </>
          );
        })}
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
