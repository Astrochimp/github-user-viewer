import { useEffect, useState } from 'react';

interface GHUser {
  name: string;
  company: string;
  location: string;
  avatar_url: string;
}

export function UserList() {
  const [ghuserList, setGhuserList] = useState<GHUser[]>([]);
  const githubusers: string[] = ['Astrochimp', 'delucis', 'fflaten', 'AlexTMjugador', 'subhamBharadwaz', 'lmatteis', 'leerob', 'shadcn'];

  async function fetchAllUsers() {
    const results = await Promise.all(
      githubusers.map((user) => fetch(`https://api.github.com/users/${user}`).then((r) => r.json()))
    );

    setGhuserList(results);
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      {ghuserList?.map((ghuser) => {
        return (
          <div className='rounded-lg mt-10 m-0 bg-slate-900 text-zinc-200 p-5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900'>
            <div className="w-full flex flex-row justify-center items-center">
              <div className="p-0">
                <img className='border-solid border-2 border-slate-900 w-18 h-18 rounded-full' src={ghuser.avatar_url} alt={ghuser.name} width="120" height="120" />
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
          </div>
        );
      })}
    </div>
  );
}
