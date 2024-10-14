'use client';

import { useSignal, initData } from '@telegram-apps/sdk-react';

export default function InitDataPage() {
  
  const initDataState = useSignal(initData.state);
  const userId = initDataState.user.id;
  const params = initDataState.params;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto my-4">
      {/* Menampilkan id user */}
      <p className="text-lg font-semibold text-gray-700">
        Id user: <span className="text-indigo-500">{userId}</span>
      </p>

      <p className="mt-2 text-lg font-semibold text-gray-700">
        Start Param: <span className="text-indigo-500">{params}</span>
      </p>
    </div>
  );
};
