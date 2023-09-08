import { Fragment, useEffect, useState } from 'react'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { FormDataNews } from '@/interfaces'

interface Category {
    id: number,
    title: string
}

const categories: Category[] = [ // This should be a asynchronous function
    {
        id: 1,
        title: 'Baloncesto'
    },
    {
        id: 2,
        title: 'Futbol',
    },
    {
        id: 3,
        title: 'Boxeo'
    }
]

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}


export const InputAutocomplete = () => {
    const { register, formState: { errors }, trigger, watch, setValue, getValues } = useFormContext<Pick<FormDataNews, 'category'>>()
    // const { control } = useFormContext<Pick<FormDataNews, 'category'>>()
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly Category[]>([]);
    const loading = open && options.length === 0; // this value is extracted from SWR

    useEffect(() => {
        let active = true

        if (!loading) {
            return undefined
        }

        (async () => {
            await sleep(1e3) // For demo purposes.

            if (active) {
                setOptions([...categories])
            }
        })();

        return () => {
            active = false
        };
    }, [loading])

    useEffect(() => {
        if (!open) {
            setOptions([])
        }
    }, [open])

    return (
        <Autocomplete
            noOptionsText="No existe esta categoría"
            loadingText="Obteniendo categorías..."
            open={open}
            onInputChange={async(e, value, reason) => {
                // if(reason === 'reset' || reason === 'clear'){
                //     setValue('category', value)
                // }
            }}
            onOpen={() => {
                setOpen(true)
            }}
            onClose={async() => {
                // if(getValues('category').length === 0){
                //     await trigger('category')
                // }

                setOpen(false)
            }}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.title}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Categoria"
                    color="secondary"
                    placeholder="¿A qué categoría pertenece la noticia?"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </Fragment>
                        ),
                    }}
                    {...register('category', {
                        required: 'Este valor es requerido'
                    })}
                    // error={!!errors.category && watch('category').length === 0}
                    // helperText={(!!errors.category && watch('category').length === 0) && errors.category?.message}
                    error={!!errors.category}
                    helperText={(!!errors.category) && errors.category?.message}
                />
            )}
        />
    )
}
