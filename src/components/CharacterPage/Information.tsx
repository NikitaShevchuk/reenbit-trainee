import { Character, CharacterLocation } from "@/Types"
import { FC } from "react"
import { InformationItem } from "./InformationItem"

interface Props {
    character: Character | undefined
    isLoading: boolean
}


export const Information: FC<Props> = ({ character, isLoading }) => {
    const charactersInfo = [
        { title: 'Gender' as string, value: character?.gender as string },
        { title: 'Status' as string, value: character?.status as string },
        { title: 'Specie' as string, value: character?.species as string },
        { title: 'Origin' as string, value: character?.origin as string | CharacterLocation },
        { title: 'Type' as string, value: character?.type as string },
    ]
    return (
        <>{
            charactersInfo.map((character, index) => (
                <InformationItem
                    key={character.title + String(index)}
                    title={character.title}
                    value={character.value}
                    isLoading={isLoading}
                />
            ))
        }</>
    )
}
