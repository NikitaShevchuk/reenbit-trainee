import { IProfile } from '@/redux/slices/profileSlice';

export const createProfileFromResponse = (response: IProfile): IProfile => ({
    name: response.name,
    email: response.email,
    // @ts-ignore
    picture: response.picture.data.url
});
