import React, { ReactNode } from 'react'
import './heading.css'

export default function Heading({children}:{children:ReactNode}) {
    return (
        <span className={`circle-sketch-highlight relative`}>
            {children}
        </span>
    )
}