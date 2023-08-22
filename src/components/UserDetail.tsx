import { useEffect, useState } from 'react';

interface GHRepo {
  full_name: string;
  html_url: string;
  stargazers_count: string;
  language: string;
}

export function UserDetail({ user }: { user: string; }) {
  const [repos, setRepos] = useState<GHRepo[]>([]);

  async function getUserRepos({ user }: { user: string; }) {
    const res = await fetch(`https://api.github.com/users/${user}/`);
    const data = await res.json();
    setRepos(data);
  }

  useEffect(() => {
    getUserRepos({ user });
  }, []);


  return (
    <div className="text-left">
      <h1 className="text-6xl font-bold underline">{user} Repos</h1>
      <div className='mt-10'>
        {repos.map((rep) => {
          return (
            <div className="my-5">
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
