import React from 'react';
import { Character } from '@/Types';
import { CharacterCard } from '../CharacterCard';
import style from './characters.module.scss';

const emptyCharacter: Character = {
    created: '',
    episode: [''],
    gender: 'unknown',
    id: 0,
    image: '',
    location: { name: '', url: '' },
    name: '',
    origin: { name: '', url: '' },
    species: '',
    status: 'unknown',
    type: '',
    url: ''
};

export const Preloader = React.forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div key={0} ref={ref} className={style.characters}>
            {Array.from(Array(8)).map(() => (
                <CharacterCard key={Math.random()} character={emptyCharacter} />
            ))}
        </div>
    );
});
