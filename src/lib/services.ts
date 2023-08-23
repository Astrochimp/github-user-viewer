import { GHUser } from '../types/github';

export async function getUserRepos({ username }: { username: string }) {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?page=1&per_page=20&sort=updated`
  );
  return await res.json();
}

export async function getUserFollowers({ username }: { username: string }) {
  const res = await fetch(
    `https://api.github.com/users/${username}/followers?page=1&per_page=5`
  );
  return await res.json();
}

export async function getUserDetail({ username }: { username: string }) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return await res.json();
}

export async function fetchAllUsers({
  githubusers,
}: {
  githubusers: string[];
}): Promise<GHUser[]> {
  const results = await Promise.all(
    githubusers.map((user) =>
      fetch(`https://api.github.com/users/${user}`).then((r) => r.json())
    )
  );

  return await results;
}
