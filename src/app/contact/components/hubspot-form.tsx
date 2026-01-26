'use client';

import { useEffect } from 'react';

export default function HubspotForm() {
  useEffect(() => {
    // Prevent loading the script more than once
    if (document.getElementById('hubspot-form-script')) return;

    const script = document.createElement('script');
    script.id = 'hubspot-form-script';
    script.src = 'https://js-na2.hsforms.net/forms/embed/244290520.js';
    script.defer = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="na2"
      data-form-id="c6caec2d-656a-40a4-a9ae-2f6a061487bc"
      data-portal-id="244290520"
    />
  );
}
