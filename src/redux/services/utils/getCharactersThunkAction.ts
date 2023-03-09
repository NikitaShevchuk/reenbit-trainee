import { Character, Info } from '@/Types';
import { characterApi } from '../characterApi';

const sortByName = (a: Character, b: Character) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
};

// Thunk Action to sort characters by name
export const getCharactersThunkAction = (page: string, data: Info<Character[]>) =>
    characterApi.util.updateQueryData(`getAllCharacters`, page, (draftCharacters) => {
        if (!draftCharacters?.results) {
            draftCharacters = data;
            if (!draftCharacters?.results) return;
            draftCharacters?.results.sort(sortByName);
            return;
        }
        draftCharacters?.results.sort(sortByName);
    });
