import type {ReactNode} from 'react';

type GoogleAdSenseProviderProps = {
    children?: ReactNode;
};

const GoogleAdSenseProvider = ({ children }: GoogleAdSenseProviderProps) => {
    // useEffect(() => {
    //     if (typeof window === 'undefined') return;
    //     if (document.querySelector('script[data-adsbygoogle]')) return;
    //
    //     const script = document.createElement('script');
    //     script.async = true;
    //     // TODO: client 값 교체
    //     script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_CLIENT_ID';
    //     script.setAttribute('crossorigin', 'anonymous');
    //     script.setAttribute('data-adsbygoogle', 'true');
    //     document.head.appendChild(script);
    // }, []);

    return {children};
};

export default GoogleAdSenseProvider;