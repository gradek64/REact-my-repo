import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'

export const setPasswordStrengthOptions = async (userInputs?: (string | number)[]): Promise<void> => {
    const zxcvbnCommonPackage = await import(/* webpackChunkName: "zxcvbnCommonPackage" */ '@zxcvbn-ts/language-common')
    const zxcvbnEnPackage = await import(/* webpackChunkName: "zxcvbnEnPackage" */ '@zxcvbn-ts/language-en')

    zxcvbnOptions.setOptions({
        dictionary: {
            ...zxcvbnCommonPackage.default.dictionary,
            ...zxcvbnEnPackage.default.dictionary,
            userInputs: userInputs || []
        },
        graphs: zxcvbnCommonPackage.default.adjacencyGraphs,
        translations: zxcvbnEnPackage.default.translations
    })
}

export const getPasswordStrength = (password: string): string => {
    if (!password) return ''

    const { score } = zxcvbn(password)

    // zxcvbn gives us an integer score out of 4 (including 0 out of 4)
    switch (score) {
        case 0:
        case 1:
            return 'Weak'
        case 2:
        case 3:
            return 'Medium'
        case 4:
            return 'Strong'
        default:
            return ''
    }
}
