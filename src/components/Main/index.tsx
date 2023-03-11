import { Characters } from "../Characters"
import { Loader } from "../Loader"
import { Logo } from "../Logo"
import { Search } from "../Search"

export const Main = () => {
    return <Loader fullScreen />
    return (
        <main className='opacity'>
            <Logo />
            <Search />
            <Characters />
        </main>
    )
}