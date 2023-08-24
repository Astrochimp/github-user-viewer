import { useEffect, useState } from 'react';
import { GHRepo } from '../types/github';
import { getUserRepos } from '../lib/services';

export function Repos({ userId }: { userId: string; }) {
  const [repos, setRepos] = useState<GHRepo[]>([]);

  useEffect(() => {
    async function loadRepos() {
      const repoData = await getUserRepos({ username: userId });
      setRepos(repoData);
    }

    loadRepos();
  }, [userId]);

  return (
    <div data-testid="repo-wrapper">
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
