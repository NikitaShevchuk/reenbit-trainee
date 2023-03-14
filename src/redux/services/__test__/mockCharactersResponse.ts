import { Info, Character } from '@/Types';

export const mockCharactersResponse: Info<Character[]> = {
    info: { count: 1, next: '', pages: 2, prev: '' },
    results: [
        {
            name: 'A',
            created: '',
            episode: [''],
            gender: 'Male',
            id: 1,
            image: '',
            location: { name: 'unknown', url: 'url' },
            origin: { name: 'unknown', url: 'url' },
            species: 'unknown',
            status: 'unknown',
            type: 'human',
            url: 'url'
        },
        {
            name: 'B',
            created: '',
            episode: [''],
            gender: 'Male',
            id: 1,
            image: '',
            location: { name: 'unknown', url: 'url' },
            origin: { name: 'unknown', url: 'url' },
            species: 'unknown',
            status: 'unknown',
            type: 'human',
            url: 'url'
        }
    ]
};
