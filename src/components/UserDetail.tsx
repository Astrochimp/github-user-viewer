import { useEffect, useState } from 'react';
import { GHRepo, GHUser } from '../types/github';
import { getUserRepos } from '../lib/services';
import { Followers } from './Followers';


export function UserDetail({ user }: { user: GHUser; }) {
  const [repos, setRepos] = useState<GHRepo[]>([]);

  useEffect(() => {
    async function loadRepos() {
      const repoData = await getUserRepos({ username: user.login });
      setRepos(repoData);
    }

    loadRepos();
  }, [user]);

  if (!user) {
    return <div className="p-20 text-2xl">Please click on a user to view their details</div>;
  }

  return (
    <div className="text-left text-slate-100">
      <div className='rounded-lg cursor-pointer mt-0 m-0 text-slate-600 p-3  hover:bg-zinc-900 hover:text-zinc-900 py-4 transition ease-in-out duration-300'>
        <div className="flex flex-row justify-start items-center ">
          <div className="p-0">
            <img className='border-solid border-2 border-cyan-300 w-18 h-18 rounded-full' src={user.avatar_url} alt={user.name} width="150" height="150" />
          </div>
          <div className="p-0 ml-6">
            <h2 className=" max-w-[150px] text-ellipsis text-3xl font-bold leading-tight text-cyan-300">{user.login} </h2>
            <div className="text-lg text-zinc-300">{user.name}</div>
            <div className="text-lg text-zinc-300">{user.company}</div>
          </div>
        </div>
      </div>

      <Followers userId={user.login} total={user.followers} />

      <h2 className="text-3xl font-bold mt-10 text-cyan-500">Repos</h2>
      <div className='max-w-md divide-y divide-slate-300'>
        {repos?.map((rep, index) => {
          return (
            <div className="mt-7" key={index}>
              <h2 className="text-lg font-bold m-0">{rep.full_name}</h2>
              <p className="m-0 p-0">
                <a href={rep.html_url} target="_blank" className="text-slate-400 text-xs">
                  {rep.html_url}
                </a>
              </p>
              <div className="flex flew-row mt-2">
                {rep.language ? (
                  <div className="inline-block rounded-md py-1 px-2 text-xs bg-purple-800 text-zinc-200 mr-5">{rep.language}</div>
                ) : null}
                <div className="text-sm">⭐️{` `}{rep.stargazers_count}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
