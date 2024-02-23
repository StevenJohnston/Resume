import { headers } from 'next/headers';

export function getHost() {
    const headersList = headers();
    const host = headersList.get('host');
    return host
}
export default function getCurrentUrl() {
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = host?.includes('localhost') ? 'http:' : 'https:';
    const currentURL = protocol + '//' + host + (headersList.get('x-forwarded-uri') || '');
    return currentURL
}