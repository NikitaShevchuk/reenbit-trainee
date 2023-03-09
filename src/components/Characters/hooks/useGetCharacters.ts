import { useGetAllCharactersQuery } from '@/redux/services/characterApi';
import React from 'react';

export const useGetCharacters = () => {
    const [page, setPage] = React.useState<number>(1);
    const characterData = useGetAllCharactersQuery(page);
    return {
        page,
        setPage,
        characterData
    };
};
