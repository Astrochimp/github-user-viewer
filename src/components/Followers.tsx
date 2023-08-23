import { useEffect, useState } from 'react';
import { getUserFollowers } from '../lib/services';
import { GHUser } from '../types/github';
import { Link } from 'react-router-dom';

export function Followers({ userId, total }: { userId: string; total: string; }) {
  const [followers, setFollowers] = useState<GHUser[]>([]);

  useEffect(() => {
    async function loadUserData() {
      if (userId) {
        const followerData = await getUserFollowers({ username: userId });
        setFollowers(followerData);
      }
    }

    loadUserData();
  }, [userId]);


  return (
    <div data-testid="follower-wrapper">
      <h3 className="text-cyan-400 font-bold text-2xl">Followers <div className="inline-block bg-cyan-600 text-slate-100 text-sm py-1 px-2 rounded-md">{total}</div></h3>
      <ul className="flex flex-row">
        {followers?.map((ghuser) => {
          return (
            <li key={ghuser.id} className='rounded-lg cursor-pointer mt-0 m-0 text-slate-600 p-3  hover:bg-zinc-900 hover:text-zinc-900 py-4 transition ease-in-out duration-300'>
              <Link to={`/user/${ghuser.login}`}>
                <div className="flex flex-row justify-start items-center ">
                  <div className="p-0">
                    <img className='border-solid border-2 border-cyan-300 w-18 h-18 rounded-full' src={ghuser.avatar_url} alt={ghuser.name} width="60" height="60" />
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
