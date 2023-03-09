import { useGetCharacterByIdQuery } from "@/redux/services/characterApi"
import classNames from "classnames"
import Skeleton from "react-loading-skeleton"
import { useParams } from "react-router-dom"
import { ErrorPage } from "../ErrorPage"
import { NavigationButton } from "../NavigationButton"
import { Image } from './Image'
import { InformationItem } from "./InformationItem"
import style from './character-page.module.scss'

export const CharacterPage = () => {
    const { id } = useParams()
    if (!id) return <ErrorPage />
    const { data: character, isLoading, isError } = useGetCharacterByIdQuery(id)
    if (isError) return <ErrorPage />
    return (
        <div className={classNames(style.character, 'opacity')}>
            <NavigationButton />
            <Image imageUrl={character?.image} />
            <h1 className={style.character__title}>
                {isLoading ? <Skeleton inline /> : character?.name}
            </h1>
            <div className={style.character__subtitle}>
                Informations
            </div>
            <InformationItem
                title='Gender'
                value={character?.gender}
                isLoading={isLoading}
            />
            <InformationItem
                title='Status'
                value={character?.status}
                isLoading={isLoading}
            />
            <InformationItem
                title='Specie'
                value={character?.species}
                isLoading={isLoading}
            />
            <InformationItem
                title='Origin'
                value={character?.origin}
                isLoading={isLoading}
            />
            <InformationItem
                title='Type'
                value={character?.type}
                isLoading={isLoading}
            />
        </div>
    )
}
