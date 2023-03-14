import { RouteObject } from 'react-router-dom';
import { CharacterPage } from './components/CharacterPage';
import { ErrorPage } from './components/ErrorPage';
import { Main } from './components/Main';

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
