import searchIcon from '@assets/icons/search-icon.svg'
import React from "react"
import { Input } from "../Input"

export const Search = () => {
    const [searchFieldValue, setSearchFieldValue] = React.useState<string>("")
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }
    const onIconClick = (e: React.MouseEvent<HTMLImageElement>) => { }
    return (
        <Input
            value={searchFieldValue}
            onChange={onChange}
            placeHolder="Find by name..."
            startIcon={{ path: searchIcon, onClick: onIconClick }}
        />
    )
}