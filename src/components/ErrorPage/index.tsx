import { Logo } from "../Logo"

export const ErrorPage = () => {
    return (
        <main>
            <Logo />
            <div className="router-error">
                <h1>Page not found!</h1>
            </div>
        </main>
    )
}
