import { Character, Info } from '@/Types';
import { CharactersParams, characterApi } from '../characterApi';

export const sortByName = (a: Character, b: Character) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
};

// Thunk Action to sort characters by name
export const getCharactersThunkAction = (
    charactersParams: CharactersParams,
    data: Info<Character[]>
) =>
    characterApi.util.updateQueryData(`getAllCharacters`, charactersParams, (draftCharacters) => {
        if (!draftCharacters?.results) {
            draftCharacters = data;
            if (!draftCharacters?.results) return;
            draftCharacters?.results.sort(sortByName);
            return;
        }
        draftCharacters?.results.sort(sortByName);
    });
