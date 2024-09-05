'use client';
import { useInitData } from '@telegram-apps/sdk-react';

// Fungsi untuk mendapatkan data user dari initData
function DataUser() {
  const initData = useInitData(); // Mendapatkan data user dari initData
  const user = initData.user ? initData.user.id : null; // Mendapatkan id user
  return user;  // Mengembalikan id user
}

// Fungsi untuk menampilkan halaman home
export default function Home() {
  const userId = DataUser();  // Mendapatkan id user
  return (
    <>
      {/* Menampilkan id user */}
      <p>{userId}</p>
    </>
  );
}
