'use client';

import { useSignal, initData } from '@telegram-apps/sdk-react';

export default function InitDataPage() {
  
  const initDataState = useSignal(initData.state);

  return (
        <>
          <div style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            <strong>id:</strong> {initDataState.user.id}
          </div>
          <div style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            <strong>username:</strong> {initDataState.user.username}
          </div>
          <div style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            <strong>photo_url:</strong> {initDataState.user.photoUrl}
          </div>
          <div style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            <strong>last_name:</strong> {initDataState.user.lastName}
          </div>
          <div style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            <strong>first_name:</strong> {initDataState.user.firstName}
          </div>
          <div style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            <strong>is_bot:</strong> {initDataState.user.isBot ? 'Yes' : 'No'}
          </div>
          <div style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            <strong>is_premium:</strong> {initDataState.user.isPremium ? 'Yes' : 'No'}
          </div>
        </>
  );
};
