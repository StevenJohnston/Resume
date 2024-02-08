'use client'
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'

import { useCallback, useEffect, useState } from "react"

export default function RootLayout() {
    return (
        <html lang="en" className='h-full'>
            <body className='h-full'>
                <div className='flex flex-row h-full'>
                    Full
                </div>
            </body>
        </html>
    )
}