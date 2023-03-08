import { RouteObject } from 'react-router-dom';
import { Main } from './components/Main';
import { ErrorPage } from './components/ErrorPage';
import { CharacterPage } from './components/CharacterPage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />
    },
    {
        path: '/character/:id',
        element: <CharacterPage />
    }
];
