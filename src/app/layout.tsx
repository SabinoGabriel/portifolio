import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Gabriel Sabino Leite | Portfólio',
    description: 'Portfólio de Gabriel Sabino Leite, Analista de Projetos e Desenvolvedor Web, graduando em Sistemas de Informação pela UFRPE. Experiência em desenvolvimento front-end, design de sistemas, gestão de projetos e metodologias ágeis (Scrum).',
    applicationName: 'Portfólio Gabriel Sabino Leite',
    authors: [{ url: 'https://www.linkedin.com/in/gabriel-sabino-leite-198a04100/', name: 'Gabriel Sabino Leite' }],
    keywords: [
        'Gabriel Sabino Leite', 'Portfólio', 'React.js', 'Next.js', 'React Native',
        'HTML5', 'CSS', 'JavaScript', 'Python', 'Pandas', 'NumPy', 'Matplotlib',
        'Scrum', 'Trabalho em equipe', 'Comunicação', 'Git', 'GitHub', 'Visual Studio Code', 'Figma',
        'Gamificação', 'Design de sistemas', 'Apresentações', 'Inglês'],
    creator: 'Gabriel Sabino Leite',
    publisher: 'Gabriel Sabino Leite',
    abstract: 'Portfólio profissional de Gabriel Sabino Leite, com projetos, experiências, habilidades e certificados em tecnologia e gestão de projetos.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <head>
                <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="manifest" href="/icons/site.webmanifest" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
