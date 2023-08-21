import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ghuser, setGhuser] = useState<{}>();
  const user = 'Astrochimp';
  const githubusers = ['Astrochimp', 'delucis', 'fflaten', 'AlexTMjugador', 'subhamBharadwaz', 'lmatteis', 'leerob', 'shadcn'];

  useEffect(() => {
    async function getUser() {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      console.log('data', data);
      setGhuser(data);
    }

    getUser();
  }, []);

  return (
    <div className="text-left m-0 p0">
      <div className='mt-10 m-0 bg-slate-900 text-zinc-200 p-5'>
        {ghuser ? (
          <>
            <div className="w-full flex flex-row justify-center items-center">
              <div className="p-0">
                <img className='w-18 h-18 rounded-full' src={ghuser.avatar_url} alt={ghuser.name} width="120" height="120" />
              </div>
              <div className="p-0 ml-5">
                <h2 className="text-3xl font-bold leading-tight">{ghuser.name} </h2>
              </div>
            </div>
            <div className="p-5">
              <div>{ghuser.company}</div>
              <div>{ghuser.name}</div>
              <div>{ghuser.location}</div>
            </div>
          </>
        ) : null}

      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
