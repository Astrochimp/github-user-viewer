import { useEffect, useState } from 'react';
import { GHRepo, GHUser } from '../types/github';


export function UserDetail({ user }: { user: GHUser; }) {
  const [repos, setRepos] = useState<GHRepo[]>([]);

  useEffect(() => {
    async function getUserRepos({ username }: { username: string; }) {
      const res = await fetch(`https://api.github.com/users/${username}/repos?page=1&per_page=20&sort=updated`);
      const data = await res.json();
      console.log('daat', data);
      setRepos(data);
    }

    getUserRepos({ username: user.login });
  }, [user]);

  if (!user) {
    return <>No user</>;
  }

  return (
    <div className="text-left">
      <h1 className="text-6xl font-bold underline">{user.login} Repos</h1>
      <div className='mt-10'>
        {repos?.map((rep, index) => {
          return (
            <div className="my-5" key={index}>
              <h2 className="text-2xl font-bold">{rep.full_name}</h2>
              <p>
                <a href={rep.html_url} target="_blank">{rep.html_url}</a>
              </p>
              <div className="inline-block rounded-md py2 px-2 text-sm bg-purple-800 text-zinc-200">{rep.language}</div>
              <div>⭐️{rep.stargazers_count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
