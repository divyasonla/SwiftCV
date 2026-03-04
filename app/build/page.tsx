import { Metadata } from 'next'
import { BuildPageClient } from './BuildPageClient'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Build Your Resume',
}

export default function BuildPage() {
    return <BuildPageClient />
}
