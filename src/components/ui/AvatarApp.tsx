import { FC } from 'react'
import { Avatar, Stack, Typography } from '@mui/material'

interface Props {
    fullName: string;
    date: string;
    photoUrl: string;
}

export const AvatarApp:FC<Props> = ({ fullName, date, photoUrl }) => {
    return (
        <Stack direction="row" columnGap={1}>
            <Avatar alt="Rafael Sequeira" src={ photoUrl } />
            <Stack>
                <Typography className='body-color' variant='caption'>{ fullName }</Typography>
                <Typography className='body-color' variant='button' fontSize={10}>{ date }</Typography>
            </Stack>
        </Stack>
    )
}
