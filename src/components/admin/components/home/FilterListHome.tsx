import { FC, useEffect, useState } from 'react'
import { CommentOutlined } from '@mui/icons-material'
import { List, ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material'


interface Props {
    options: string[],
    onGetFilters: (filters: string[]) => void
}

export const FilterListHome: FC<Props> = ({ options, onGetFilters }) => {
    const [checked, setChecked] = useState<string[]>([])

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    useEffect(() => {
        onGetFilters(checked)
    }, [checked])

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                options.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem
                            key={value}
                            // secondaryAction={
                            //   <IconButton edge="end" aria-label="comments">
                            //     <CommentOutlined />
                            //   </IconButton>
                            // }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value} />
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    );
}