/* eslint-disable import/no-extraneous-dependencies */
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store';
import { useGetAllCharactersQuery } from '../characterApi';
import { mockCharactersResponse } from './mockCharactersResponse';

require('jest-fetch-mock').enableMocks();

let store = setupStore();

interface Props {
    children: React.ReactNode | string;
}

const wrapper: React.FC<Props> = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('Character api', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
        store = setupStore();
    });

    it('Should get all characters', async () => {
        fetchMock.mockResponse(JSON.stringify(mockCharactersResponse));
        const { result, waitForNextUpdate } = renderHook(
            () => useGetAllCharactersQuery({ page: 1 }),
            { wrapper }
        );
        const response = result.current;
        expect(response.data).toBeUndefined();
        expect(response.isLoading).toBe(true);

        await waitForNextUpdate({ timeout: 1000 });

        const nextResponse = result.current;
        expect(nextResponse.data).not.toBeUndefined();
        expect(nextResponse.isSuccess).toBe(true);
        expect(nextResponse.isLoading).toBe(false);
    });
});
