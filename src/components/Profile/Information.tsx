import { IProfile } from '@/redux/slices/profileSlice'
import { FC } from 'react'
import { InformationItem } from '../common/InformationItem'

interface Props {
    profile: IProfile
}

export const Information: FC<Props> = ({ profile }) => {
    const charactersInfo = [
        { title: 'Name' as string, value: profile?.name as string },
        { title: 'Email' as string, value: profile?.email as string },
    ]
    return (
        <>{
            charactersInfo.map((profile, index) => (
                <InformationItem
                    key={profile.title}
                    title={profile.title}
                    value={profile.value}
                />
            ))
        }</>
    )
}
