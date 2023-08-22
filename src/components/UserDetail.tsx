import { useEffect, useState } from 'react';
import { GHRepo, GHUser } from '../types/github';


export function UserDetail({ user }: { user: GHUser; }) {
  const [repos, setRepos] = useState<GHRepo[]>([]);

  useEffect(() => {
    async function getUserRepos({ username }: { username: string; }) {
      const res = await fetch(`https://api.github.com/users/${username}/repos?page=1&per_page=20&sort=updated`);
      const data = await res.json();
      setRepos(data);
    }

    getUserRepos({ username: user.login });
  }, [user]);

  if (!user) {
    return <>No user</>;
  }

  return (
    <div className="text-left text-slate-100">
      <h2 className="text-2xl font-bold">{user.login} Repos</h2>
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
                  <div className="inline-block rounded-md py-1 px-2 text-xs bg-purple-800 text-zinc-200">{rep.language}</div>
                ) : null}
                <div className="text-sm ml-5">⭐️{rep.stargazers_count}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
