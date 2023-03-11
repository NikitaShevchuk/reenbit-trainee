import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { searchStringSelector } from '@/redux/selectors/filter'
import { filterSlice } from '@/redux/slices/filterSlice'
import loginIcon from "@assets/icons/login-icon.svg"
import searchIcon from '@assets/icons/search-icon.svg'
import debounce from 'lodash.debounce'
import React from "react"
import { Input } from "../Input"
import { Modal } from '../Modal'

export const Search = () => {
    const searchString = useAppSelector(searchStringSelector)
    const [searchFieldValue, setSearchFieldValue] = React.useState<string>(searchString)
    const [modalIsOpened, setIsModalOpened] = React.useState<boolean>(false)
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
    const onLoginIconClick = (e: React.MouseEvent<HTMLImageElement>) => { setIsModalOpened(true) }

    return (
        <>
            <Input
                value={searchFieldValue}
                onChange={onChange}
                placeHolder="Filter by name..."
                startIcon={{ path: searchIcon, onClick: () => { } }}
                endIcon={{ path: loginIcon, onClick: onLoginIconClick }}
            />
            <Modal
                modalIsOpened={modalIsOpened}
            />
        </>
    )
}