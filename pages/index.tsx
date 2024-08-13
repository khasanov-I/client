import React from 'react'
import { Roboto } from 'next/font/google'
import MainLayout from '../layouts/MainLayout'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500'
})

export default function Page() {
    return <>
        <MainLayout>
            <div className={`center ${roboto.className}`}>
                <h1>Добро пожаловать</h1>
                <h3>Здесь собраны лучшие треки</h3>
            </div>
        </MainLayout>

        <style jsx>
            {
                `
                    .center {
                        margin-top: 150px;
                        display:flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                `
            }
        </style>
    </>
}