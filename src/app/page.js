'use client';
import { useInitData } from '@telegram-apps/sdk-react';

function DataUser() {
  const initData = useInitData();
  const user = initData.user ? initData.user.id : null;
  return user;
}

export default function Home() {
  const userId = DataUser();
  return (
    <>
      <p>{userId}</p>
    </>
  );
}
