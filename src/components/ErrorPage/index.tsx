import { Logo } from '../Logo';

export const ErrorPage = () => {
    return (
        <main>
            <Logo />
            <div className="router-error">
                <h1>You've entered invalid url or an error ocurred while loading content.</h1>
            </div>
        </main>
    );
};
