export const isNum = (n: any) => typeof n === 'number'
export const onlyNumbers = (str: string) => str.replace(/\D/g, "")