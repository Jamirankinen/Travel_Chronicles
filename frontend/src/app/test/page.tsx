'use client';

import { useEffect } from 'react';
import API from '@/lib/api';

export default function TestAPI() {
  useEffect(() => {
    API.get('/')
      .then((res) => console.log(res.data))
      .catch((err) => console.error('Error fetching from backend:', err));
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">API Test Page</h1>
      <p>Open your browser console to see the backend response.</p>
    </div>
  );
}
