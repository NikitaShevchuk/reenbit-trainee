import { Characters } from "../Characters"
import { Logo } from "../Logo"
import { Search } from "../Search"

export const Main = () => {
    return (
        <main className='opacity'>
            <Logo />
            <Search />
            <Characters />
        </main>
    )
}