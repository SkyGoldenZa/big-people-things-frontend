export function includesNumber(str: string) {
  return /[0-9]/.test(str);
}

export function includesSpecialCharacter(str: string) {
  return /[!@#$&()\-`.+,/]/.test(str);
}

export function includesUpperCaseLetter(str: string) {
  return /[A-Z]/.test(str);
}

export function includesLowerCaseLetter(str: string) {
  return /[a-z]/.test(str);
}
