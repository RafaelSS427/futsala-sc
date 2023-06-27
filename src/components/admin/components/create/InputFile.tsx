import { ChangeEvent, Dispatch, FC, SetStateAction, DragEvent, useRef, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

interface Props {
    setFiles: Dispatch<SetStateAction<File[]>>;
    currentName: string
}

export const InputFile: FC<Props> = ({ setFiles, currentName }) => {
    const inputFileRef = useRef<HTMLInputElement | null>(null)
    const [dragActive, setDragActive] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        console.log(e.target.files.length)
        const files = Array.from(e.target.files)

        setFiles(oldFiles => [...oldFiles, ...files])
    }

    const handleDrop = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files = Array.from(e.dataTransfer.files)
            setFiles(oldFiles => [...oldFiles, ...files])
        }
    }

    const handleDrag = (e: DragEvent<HTMLElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    return (
        <Box position="relative">
            <Stack
                onDragEnter={handleDrag}
                spacing={2}
                alignItems="center"
                component="label"
                htmlFor="input-file"
                p={2}
                sx={{
                    borderRadius: "10px",
                    border: theme => `2px dashed ${dragActive ? theme.palette.secondary.main : '#555'}`,
                    color: "#444",
                    cursor: "pointer",
                    transition: "background .2s ease-in-out, border .2s ease-in-out",
                    ":hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.025)",
                        borderColor: theme => theme.palette.secondary.main,

                        ".input-file-title": {
                            color: "#222"
                        },

                        ".input-file-buttonBorder": {
                            borderColor: "#222"
                        }
                    }
                }}
            >
                <Typography className="input-file-title" component="span" textAlign="center" fontSize={{ xs: 16, sm: 20 }}>¡Click para cargar o arrastre y suelte sus archivos!</Typography>
                <Typography component="span" textAlign="center" fontSize={{ xs: 16, sm: 20 }}>o</Typography>

                <Stack className="input-file-buttonBorder" direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={1} p={1} border="1px solid #444" borderRadius="6px">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: "none", color: "white" }}
                        onClick={() => inputFileRef.current?.click()}
                    >
                        Seleccionar archivo
                    </Button>
                    <Typography component="p" variant="body1">
                        {currentName}
                    </Typography>

                    <input
                        ref={inputFileRef}
                        id="input-file"
                        type="file"
                        style={{ display: "none" }}
                        multiple
                        onChange={handleChange}
                    />
                </Stack>

            </Stack>

            {dragActive && (
                <Box
                    sx={{
                        position: " absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        top: " 0px",
                        right: " 0px",
                        bottom: " 0px",
                        left: " 0px"
                    }}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                />
            )}
        </Box>
    )
}