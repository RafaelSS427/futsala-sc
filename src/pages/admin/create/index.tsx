import { NextPage } from 'next'
import { FormProvider, useForm } from 'react-hook-form'
import { Box, Container, Stack, TextField } from '@mui/material'
import { AdminLayout, Carousel } from '@/components'
import { InputAutocomplete, InputFile, SlateApp } from '@/components/admin'
import { useInputFile } from '@/hooks'
import { FormDataNews } from '@/interfaces'

// TODO: The rule of 'minLength' should be added to the properties form
// TODO: Add the necesary rules to the form
// TODO: Make onSubmit funcional
const CreateNewsPage: NextPage = () => {

    const methods = useForm<FormDataNews>({
        defaultValues: {
            title: '',
            subtitle: '',
            category: '',
            files: [],
            body: ''
        }
    })

    const { register, formState: { errors }, handleSubmit, reset, control, setValue, getValues } = methods

    const { files, getCurrentFilesTitle, removeFile, setFiles } = useInputFile()

    const onSubmit = (data: FormDataNews) => {
        console.log(data)
        reset()
    }

    return (
        <AdminLayout title="Crear noticia">
            <Container maxWidth="sm" sx={{ mt: 4 }}>

                <Stack spacing={4}>

                    <FormProvider {...methods}>

                        {/* Form */}
                        <Stack
                            spacing={2}
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            id="create-news-form"
                        >
                            <TextField
                                placeholder="Título de la noticia"
                                variant="outlined"
                                label="Título"
                                color="secondary"
                                {...register('title', {
                                    required: 'Este valor es requerido',
                                })}
                                error={!!errors.title}
                                helperText={!!errors.title && errors.title.message}
                            />
                            <TextField
                                placeholder="Subtítulo de la noticia"
                                variant="outlined"
                                label="Subtítulo"
                                color="secondary"
                                multiline
                                rows={3}
                                {...register('subtitle', {
                                    required: 'Este valor es requerido'
                                })}
                                error={!!errors.subtitle}
                                helperText={!!errors.subtitle && errors.subtitle.message}
                            />

                            <InputAutocomplete />

                            <InputFile setFiles={setFiles} currentName={getCurrentFilesTitle()} />

                        </Stack>

                    </FormProvider>

                    {/* Slide */}
                    <Box>
                        {
                            files.length > 0 && (
                                <Carousel
                                    isAdmin
                                    removeFile={removeFile}
                                    slides={
                                        files.map(file => ({
                                            name: file.name,
                                            url: URL.createObjectURL(file)
                                        }))
                                    }
                                    options={{
                                        loop: true
                                    }}
                                />
                            )
                        }

                    </Box>

                    {/* Custom TextField */}
                    <Box minHeight="calc(100vh - 80px)" maxHeight="auto">
                        <SlateApp />
                    </Box>
                </Stack>

            </Container>
        </AdminLayout>
    )
}

export default CreateNewsPage