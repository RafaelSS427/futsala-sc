//     0             1        2        3
//['baloncesto', 'futbol', 'tenis', 'boxeo']
export const getPipeLinks = (values: string[]):string[] => {
    const newValues: string[] = []
    let counter = 0

    const temp = (values.length + (values.length - 1))

    for(let i = 0; i < temp; i++){
        
        if(i === 0){
            newValues.push(values[counter++])
        } else {
            if(i%2 === 0){
                newValues.push(values[counter++])
            } else {
                newValues.push("|")
            }
        }
    }
    
    return newValues
}