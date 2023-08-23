import { useEffect, useState } from 'react';
import { getUserOrgs } from '../lib/services';
import { GHOrgs } from '../types/github';

export function Orgs({ userId }: { userId: string; }) {
  const [orgs, setOrgs] = useState<GHOrgs[]>([]);

  useEffect(() => {
    async function loadOrgData() {
      if (userId) {
        const orgData = await getUserOrgs({ username: userId });
        setOrgs(orgData);
      }
    }

    loadOrgData();
  }, [userId]);

  if (orgs.length === 0) {
    return <div data-testid="orgs-wrapper-no-results"></div>;
  }

  return (
    <div data-testid="orgs-wrapper">
      <h3 className="text-cyan-400 font-bold text-2xl">Organizations</h3>
      <div>
        <ul className="flex flex-row">
          {orgs?.map((org) => {
            return (
              <li key={org.id} className='rounded-lg cursor-pointer mt-0 m-0 text-slate-600 p-3  hover:bg-zinc-900 hover:text-zinc-900 py-4 transition ease-in-out duration-300'>
                <a href={org.url} target="_blank">
                  <div className="flex flex-row justify-start items-center ">
                    <div className="p-0">
                      <img className='border-solid border-2 border-cyan-300 w-18 h-18 rounded-full' src={org.avatar_url} alt={org.login} width="60" height="60" />
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

}
