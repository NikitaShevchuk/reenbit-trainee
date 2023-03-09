import { useGetCharacterByIdQuery } from "@/redux/services/characterApi"
import classNames from "classnames"
import React from "react"
import Skeleton from "react-loading-skeleton"
import { useParams } from "react-router-dom"
import { ErrorPage } from "../ErrorPage"
import { NavigationButton } from "../NavigationButton"
import { Image } from './Image'
import { Information } from "./Information"
import style from './character-page.module.scss'

export const CharacterPage = () => {
    const { id } = useParams()
    if (!id) return <ErrorPage />
    const { data: character, isLoading, isError } = useGetCharacterByIdQuery(id)
    if (isError) return <ErrorPage />
    React.useEffect(
        () => { window.scrollTo(0, 0) }, []
    )
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
            <Information
                character={character}
                isLoading={isLoading}
            />
        </div>
    )
}
