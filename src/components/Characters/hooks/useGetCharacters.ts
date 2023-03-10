import { pageSelector, searchStringSelector } from '@/redux/selectors/filter';
import { useGetAllCharactersQuery } from '@/redux/services/characterApi';
import { useAppSelector } from './../../../redux/hooks/index';

export const useGetCharacters = () => {
    const page = useAppSelector(pageSelector);
    const searchString = useAppSelector(searchStringSelector);
    const characterData = useGetAllCharactersQuery({ page, searchString });
    return {
        page,
        characterData
    };
};
