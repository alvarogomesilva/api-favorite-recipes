
export function parseStringInArray(value: string[]) {
        const convertInString = String(value)
        const newArray = convertInString.split(',').map((i) => i.trim())

        return newArray;
}

