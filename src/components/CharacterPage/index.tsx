import { useGetCharacterByIdQuery } from "@/redux/services/characterApi"
import { useParams } from "react-router-dom"
import { ErrorPage } from "../ErrorPage"
import { NavigationButton } from "../NavigationButton"
import { Image } from './Image'
import { InformationItem } from "./InformationItem"
import style from './character-page.module.scss'
import classNames from "classnames"

export const CharacterPage = () => {
    const { id } = useParams()
    if (!id) return <ErrorPage />
    const { data: character, isLoading } = useGetCharacterByIdQuery(id)
    return (
        <div className={classNames(style.character, 'opacity')}>
            <NavigationButton />
            <Image imageUrl={character?.image} />
            <h1 className={style.character__title}>
                {character?.name}
            </h1>
            <div className={style.character__subtitle}>
                Informations
            </div>
            <InformationItem
                title='Gender'
                value={character?.gender}
            />
            <InformationItem
                title='Status'
                value={character?.status}
            />
            <InformationItem
                title='Specie'
                value={character?.species}
            />
            <InformationItem
                title='Origin'
                value={character?.origin}
            />
            <InformationItem
                title='Type'
                value={character?.type}
            />
        </div>
    )
}
