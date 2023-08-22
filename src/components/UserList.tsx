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
    setCurrentUser(user);
  }


  return (
    <div className="flex flew-row">
      <ul>
        {ghuserList?.map((ghuser) => {
          return (
            <li onClick={() => showRepos(ghuser)} key={ghuser.id} className='rounded-lg cursor-pointer mt-0 m-0 text-slate-600 p-3  hover:bg-zinc-900 hover:text-zinc-900 py-4 transition ease-in-out duration-300'>
              <div className="flex flex-row justify-start items-center ">
                <div className="p-0">
                  <img className='border-solid border-2 border-cyan-300 w-18 h-18 rounded-full' src={ghuser.avatar_url} alt={ghuser.name} width="60" height="60" />
                </div>
                <div className="p-0 ml-2">
                  <h2 className=" max-w-[150px] text-ellipsis text-md font-bold leading-tight text-cyan-300">{ghuser.login} </h2>
                  <div className="text-xs text-zinc-300">{ghuser.name}</div>
                  <div className="text-xs text-zinc-300">{ghuser.company}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="p-10">
        {currentUser ? (
          <UserDetail user={currentUser} />
        ) : null}
      </div>
    </div>
  );
}
