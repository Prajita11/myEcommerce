import * as Spinners from 'react-spinners'

export const spinnerKeys = Object.keys(Spinners) as Array<keyof typeof Spinners>
export const randomSpinnerKey = spinnerKeys[Math.floor(Math.random() * spinnerKeys.length)]
export const RandomSpinner = Spinners[randomSpinnerKey]
