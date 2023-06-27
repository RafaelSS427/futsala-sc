import { useCallback, useState } from "react"


export const useInputFile = () => {
    const [files, setFiles] = useState<File[]>([])

    const removeFile = (name: string) => {
        setFiles(files => files.filter(e => e.name !== name))
    }

    const getCurrentFilesTitle = useCallback(() => {
        if (files.length === 1) {
            return files[0].name
        }

        if (files.length > 1) {
            return `${files.length} archivos seleccionadas`
        }

        return `Ningún archivo seleccionado`
    }, [files])
    
  return {
    // Properties
    files,

    // Methods
    setFiles,
    getCurrentFilesTitle,
    removeFile
  }
}
