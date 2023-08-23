import { useEffect, useState } from 'react';
import { GHUser } from '../types/github';
import { fetchAllUsers } from '../lib/services';
import { Link } from 'react-router-dom';

export function UserList() {
  const [ghuserList, setGhuserList] = useState<GHUser[]>([]);
  const githubusers: string[] = ['Astrochimp', 'delucis', 'fflaten', 'AlexTMjugador', 'subhamBharadwaz', 'lmatteis', 'leerob', 'shadcn'];

  useEffect(() => {
    async function loadAllUsers() {
      const allUsers: GHUser[] = await fetchAllUsers({ githubusers });
      setGhuserList(allUsers);
    }

    loadAllUsers();
  }, []);

  return (
    <div className="w-full p-5">
      <ul>
        {ghuserList?.map((ghuser) => {
          return (
            <li key={ghuser.id} className='rounded-lg cursor-pointer mt-0 m-0 text-slate-600 p-3  hover:bg-zinc-900 hover:text-zinc-900 py-4 transition ease-in-out duration-300'>
              <Link to={`/user/${ghuser.login}`}>
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
