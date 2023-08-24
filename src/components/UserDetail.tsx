import { GHUser } from '../types/github';
import { Followers } from './Followers';
import { Orgs } from './Orgs';
import { Repos } from './Repos';

export function UserDetail({ user }: { user: GHUser; }) {

  if (!user) {
    return <div className="p-20 text-2xl">Please click on a user to view their details</div>;
  }

  return (
    <div className="text-left text-slate-100" data-testid="user-detail-wrapper">
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

      <Orgs userId={user.login} />
      <Followers userId={user.login} total={user.followers} />
      <Repos userId={user.login} />
    </div>
  );
}
