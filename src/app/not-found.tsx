'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-white dark:bg-black'>
            <div className='flex flex-col items-center justify-center gap-8 px-10 text-center'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-8xl font-bold text-pink-500'>404</h1>
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100'>
                        Página não encontrada
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 max-w-md'>
                        A página que você está procurando não existe ou foi removida.
                    </p>
                </div>

                <Link
                    href='/'
                    className='bg-pink-500 text-white font-bold py-3 px-8 rounded hover:bg-pink-600 transition-colors'
                >
                    Voltar para o início
                </Link>
            </div>

            <footer className='absolute bottom-4 w-full flex flex-col items-center space-y-2'>
                <hr className='w-64 border-gray-200 dark:border-gray-700' />
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                    © 2025 Gabriel Sabino Leite. Todos os direitos reservados.
                </p>
            </footer>
        </div>
    )
}
