import { Link } from '@inertiajs/react';
import ApplicationLogo from '../Components/ApplicationLogo';

export default function Layout({ children }) {
    return (
        <div>
            <div>
                <Link href="/">
                    <ApplicationLogo />
                </Link>
            </div>

            <div>
                {children}
            </div>
        </div>
    );
}
