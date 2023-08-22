import { useEffect, useState } from 'react';
import { GHUser } from '../types/github';
import { UserDetail } from './UserDetail';

export function UserList() {
  const [ghuserList, setGhuserList] = useState<GHUser[]>([]);
  const githubusers: string[] = ['Astrochimp', 'delucis', 'fflaten', 'AlexTMjugador', 'subhamBharadwaz', 'lmatteis', 'leerob', 'shadcn'];
  const [currentUser, setCurrentUser] = useState<GHUser>();

  async function fetchAllUsers() {
    try {
      const results = await Promise.all(
        githubusers.map((user) => fetch(`https://api.github.com/users/${user}`).then((r) => r.json()))
      );
      setGhuserList(results);
    } catch (err) {
      console.log('error');
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  function showRepos(user: GHUser) {
    console.log('repos', user);
    setCurrentUser(user);
  }


  return (
    <div className="flex flew-row">
      <div className="flex flex-col">
        {ghuserList?.map((ghuser) => {
          return (
            <div onClick={() => showRepos(ghuser)} key={ghuser.id} className='rounded-lg mt-5 m-0 bg-slate-900 text-zinc-200 p-5 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900'>
              <div className="flex flex-row justify-start items-center">
                <div className="p-0">
                  <img className='border-solid border-2 border-slate-900 w-18 h-18 rounded-full' src={ghuser.avatar_url} alt={ghuser.name} width="120" height="120" />
                </div>
                <div className="p-0 ml-5">
                  <h2 className=" max-w-[150px] text-ellipsis text-1xl font-bold leading-tight ">{ghuser.login} </h2>
                  <div>{ghuser.name}</div>
                  <div>{ghuser.company}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-10">
        {currentUser ? (
          <UserDetail user={currentUser} />
        ) : null}
      </div>
    </div>
  );
}
