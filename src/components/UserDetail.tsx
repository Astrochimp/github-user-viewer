import { useEffect, useState } from 'react';

export function UserDetail({ user }: { user: string; }) {
  const [repos, setRepos] = useState<[]>([]);

  useEffect(() => {
    async function getUser({ user }: { user: string; }) {
      const res = await fetch(`https://api.github.com/users/${user}/`);
      const data = await res.json();
      setRepos(data);
    }

    getUser({ user });
  }, []);


  return (
    <div className="text-left">
      <h1 className="text-6xl font-bold underline">{user} Repos</h1>
      <div className='mt-10'>
        {repos.map((rep) => {
          console.log('rep', rep);
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
      <div>

      </div>
    </div>
  );
}
