export function UserDetail({ user }: { user: unknown; }) {

  return (
    <div>
      <h2>User List</h2>
      {user?.name}
    </div>
  );
}
