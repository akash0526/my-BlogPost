'use client';
import { useEffect } from 'react';

export default function AdUnit({ slotId }: { slotId: string }) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense failed to load', err);
    }
  }, []);

  return (
    <div className="my-10 flex justify-center items-center min-h-[250px] bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Replace CA-PUB-XXX with your actual ID later */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <span className="sr-only">Advertisement</span>
    </div>
  );
}