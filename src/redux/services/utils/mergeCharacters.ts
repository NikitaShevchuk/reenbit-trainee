import { Character, Info } from '@/Types';

export const mergeCharacters = (
    currentCache: Info<Character[]>,
    newCharacters: Info<Character[]>
) => {
    if (currentCache?.results && newCharacters?.results) {
        newCharacters?.results.forEach((newCharacter) => {
            if (!currentCache?.results) return;
            const isAlreadyExist = !!currentCache?.results.find(
                (cachedCharacter) => newCharacter.id === cachedCharacter.id
            );
            if (!isAlreadyExist) currentCache?.results.push(newCharacter);
        });
    }
};
