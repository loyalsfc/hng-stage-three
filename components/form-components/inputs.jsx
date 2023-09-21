import React, { useState } from 'react'

function InputWrapper({id, label, children}){
    return(
        <div className=''>
            <label htmlFor={id} className='text-sm text-black mb-2 capitalize block'>{label}</label>
            <div className='border border-gray-900 rounded-full p-4 relative'>
                {children}
            </div>
        </div>
    )
}

export function Input({value, handleChange, id, type}) {
    return (
        <InputWrapper id={id} label={id}>
            <input
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
                className='bg-transparent focus:outline-none'
            />
        </InputWrapper>
    )
}

export function Password({value, handleChange, id}) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <InputWrapper id={id} label={id}>
            <input
                type={showPassword ? "text" : "password"}
                id={id}
                value={value}
                onChange={handleChange}
                className='bg-transparent focus:outline-none'
            />
            <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_28_200)">
                        <path d="M8.86328 6.14928L11.44 8.72597L11.4522 8.591C11.4522 7.2372 10.352 6.13701 8.99825 6.13701L8.86328 6.14928Z" fill="black"/>
                        <path d="M8.99795 4.50094C11.2556 4.50094 13.0879 6.33326 13.0879 8.59093C13.0879 9.11854 12.9816 9.62161 12.7976 10.0838L15.1902 12.4764C16.4254 11.4457 17.3988 10.1124 18 8.59093C16.5808 4.99994 13.092 2.45596 8.99798 2.45596C7.85278 2.45596 6.75669 2.66045 5.73828 3.02855L7.50515 4.79132C7.96727 4.61137 8.47034 4.50094 8.99795 4.50094Z" fill="black"/>
                        <path d="M0.817983 2.27202L2.68301 4.13706L3.05521 4.50926C1.70552 5.56447 0.638037 6.96735 0 8.59104C1.41515 12.182 4.90798 14.726 8.99797 14.726C10.2659 14.726 11.4765 14.4806 12.5849 14.0348L12.9326 14.3825L15.317 16.771L16.36 15.7321L1.86093 1.22908L0.817983 2.27202ZM5.34153 6.79146L6.60533 8.05527C6.56852 8.23115 6.54398 8.40699 6.54398 8.59104C6.54398 9.94484 7.64417 11.045 8.99797 11.045C9.18202 11.045 9.3579 11.0205 9.52968 10.9837L10.7935 12.2475C10.2495 12.5174 9.64421 12.681 8.99797 12.681C6.7403 12.681 4.90798 10.8487 4.90798 8.59104C4.90798 7.94484 5.07159 7.33951 5.34153 6.79146Z" fill="black"/>
                    </g>
                    {/* <defs>
                        <clipPath id="clip0_28_200">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs> */}
                </svg>
            </button>
        </InputWrapper>
    )
}