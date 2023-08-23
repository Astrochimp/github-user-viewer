import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { GHUser } from '../types/github';
import { getUserDetail } from '../lib/services';
import { UserDetail } from "./UserDetail";

export function UserDetailView() {
  const { userId } = useParams();
  const [user, setUser] = useState<GHUser>();

  useEffect(() => {
    async function loadUserData() {
      if (userId) {
        const userData = await getUserDetail({ username: userId });
        setUser(userData);
      }
    }

    loadUserData();
  }, [userId]);

  return (
    <div>
      {user ? (
        <UserDetail user={user} />
      ) : (
        <div>
          No user selected
        </div>
      )}
    </div >
  );

}
