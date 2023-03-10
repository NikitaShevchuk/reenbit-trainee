import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { searchStringSelector } from '@/redux/selectors/filter'
import { filterSlice } from '@/redux/slices/filterSlice'
import searchIcon from '@assets/icons/search-icon.svg'
import debounce from 'lodash.debounce'
import React from "react"
import { Input } from "../Input"

export const Search = () => {
    const searchString = useAppSelector(searchStringSelector)
    const [searchFieldValue, setSearchFieldValue] = React.useState<string>(searchString)
    const dispatch = useAppDispatch()

    const setFirstPageOnNewSearchRequest = (searchString: string) => {
        if (!searchString || searchString.length < 4) {
            dispatch(filterSlice.actions.setPage(1))
            dispatch(filterSlice.actions.remountScrollComponent())
        }
    }
    const updateSearchString = React.useCallback(
        debounce((searchString: string) => {
            setFirstPageOnNewSearchRequest(searchString)
            dispatch(filterSlice.actions.setSearchString(searchString));
        }, 300),
        []
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFieldValue(e.target.value)
        setFirstPageOnNewSearchRequest(e.target.value)
        updateSearchString(e.target.value)
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