import { FC } from 'react';
import { Character, Info } from '@/Types';
import style from './characters.module.scss';
import { CharacterCard } from '../CharacterCard';

interface Props {
    characters: Info<Character[]> | undefined;
}

export const CharactersList: FC<Props> = ({ characters }) => {
    return (
        <div className={style.characters}>
            {characters?.results ? (
                characters?.results.map((singleCharacter) => (
                    <CharacterCard key={singleCharacter.id} character={singleCharacter} />
                ))
            ) : (
                <div />
            )}
        </div>
    );
};
