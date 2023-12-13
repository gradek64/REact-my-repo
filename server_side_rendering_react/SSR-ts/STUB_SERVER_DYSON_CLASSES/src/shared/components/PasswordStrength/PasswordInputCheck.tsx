/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react"

import { setPasswordStrengthOptions, getPasswordStrength } from '../PasswordStrength/PasswordStrength'



interface PasswordInputProps {
    email?: string
}

const PasswordInput = ({
    email = '',
}: PasswordInputProps) => {
    const [value, setValue] = useState('')
    const [strength, setStrength] = useState('')


    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { value: newValue } = event.target as HTMLInputElement

        setStrength(getPasswordStrength(newValue))
    }

    useEffect(() => {
        const setOptions = async () => {
            await setPasswordStrengthOptions([email])
        }
        setOptions()
    }, [])

    return (
        <>
            <div >
                <input type='password' onChange={handleChange} />
            </div>
            <p>
                Your password strength: <strong data-test='password-input-strength'>{strength}</strong>
            </p>
        </>
    )
}

export default PasswordInput