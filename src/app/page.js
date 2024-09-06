'use client';
import { useInitData } from '@telegram-apps/sdk-react';

// Fungsi untuk mendapatkan data user dari initData
function DataUser() {
  const initData = useInitData(); // Mendapatkan data user dari initData
  const user = initData.user ? initData.user.id : null; // Mendapatkan id user
  return user;  // Mengembalikan id user
}

// Fungsi untuk mendapatkan startParam dari initData
function StartParam() {
  const initData = useInitData();
  const param = initData.startParam;
  return param;
}

// Fungsi untuk menampilkan halaman home
export default function Home() {
  const userId = DataUser();  // Mendapatkan id user
  const startParam = StartParam();

  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto my-4">
        {/* Menampilkan id user */}
        <p className="text-lg font-semibold text-gray-700">
          Id user: <span className="text-indigo-500">{userId}</span>
        </p>

        <p className="mt-2 text-lg font-semibold text-gray-700">
          Start Param: <span className="text-indigo-500">{startParam}</span>
        </p>
      </div>
    </>
  );
}
