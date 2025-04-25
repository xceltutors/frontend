import { useEffect, useState } from 'react';

export function PopUpCookie() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (consent: 'accepted' | 'rejected') => {
        localStorage.setItem('cookieConsent', consent);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 w-full h-[19rem] lg:h-[15rem] bg-[var(--custom-blue-700)] 
            flex flex-col items-center justify-center text-center z-50 p-6 shadow-lg pt-5 lg:py-0">
            <p className="text-white text-lg mb-2">
                We use cookies to personalise your experience on the site.
            </p>
            <strong className="text-white text-lg">
                Let us know if you’re okay with this
            </strong>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                    onClick={() => handleConsent('rejected')}
                    className="w-full sm:w-48 px-6 py-3 border border-white 
                    font-medium rounded-md cursor-pointer transition-colors text-center text-white"
                >
                    Reject Cookies
                </button>
                <button
                    onClick={() => handleConsent('accepted')}
                    className="w-full sm:w-48 px-6 py-3 text-white cursor-pointer font-medium 
                    rounded-md bg-[var(--custom-green-500)] transition-colors text-center"
                >
                    It’s Okay
                </button>
            </div>
        </div>
    );
}
