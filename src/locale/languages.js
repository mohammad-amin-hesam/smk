const direction = {
  en: 'ltr',
  fa: 'rtl'
}

let lang = localStorage.lang ? localStorage.lang : 'fa'

export function getDirection() {
  return direction[lang]
}
