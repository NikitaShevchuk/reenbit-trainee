import { useGetCharacterByIdQuery } from "@/redux/services/characterApi"
import { useParams } from "react-router-dom"
import { ErrorPage } from "../ErrorPage"
import { NavigationButton } from "../NavigationButton"
import { Image } from './Image'
import style from './character-page.module.scss'

export const CharacterPage = () => {
    const { id } = useParams()
    if (!id) return <ErrorPage />
    const { data: character, isLoading } = useGetCharacterByIdQuery(id)
    return (
        <div className={style.character}>
            <NavigationButton />
            <Image imageUrl={character?.image} />
            <div className={style.character__title}>
                {character?.name}
            </div>
        </div>
    )
}
