import { pageSelector } from '@/redux/selectors/filter';
import { useGetAllCharactersQuery } from '@/redux/services/characterApi';
import { useAppSelector } from './../../../redux/hooks/index';

export const useGetCharacters = () => {
    const page = useAppSelector(pageSelector);
    const characterData = useGetAllCharactersQuery(page);
    return {
        page,
        characterData
    };
};
