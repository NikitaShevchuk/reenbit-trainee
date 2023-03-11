import { Characters } from "../Characters"
import { Loader } from "../Loader"
import { Logo } from "../Logo"
import { Search } from "../Search"
import { useInitializeApp } from "./hooks/useInitializeApp"

export const Main = () => {
    const isInitialized = useInitializeApp()
    if (!isInitialized) return <Loader fullScreen />
    return (
        <main className='opacity'>
            <Logo />
            <Search />
            <Characters />
        </main>
    )
}