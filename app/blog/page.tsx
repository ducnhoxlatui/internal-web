import React from 'react'
import { Navigation } from '../components/nav'
import Link from 'next/link'
import Image from 'next/image'
import pic from '@/public/images/avatar.jpg'


const Announcement = () => {

    return (
        <div>
            <Navigation />
            <div className='container mx-auto max-w-6xl py-8 mt-[100px] text-white'>
                <h1 className="mb-8 text-center text-2xl font-black text-white">Welcome to our blog!</h1>
                <div className="grid-cols-3 mb-4 grid gap-3">
                    <Link className="group" href="/blog/3">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy" width={300} height={200}
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={pic}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">The Colorful World of Synesthesia</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    A brief introduction to synesthesia, a neurological condition in which the stimulation of one sensory or cognitive pathway leads to involuntary experiences in a different pathway
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link className="group" href="/post/the-colorful-world-of-synesthesia">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy" width={300} height={200}
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={pic}
                                     />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">The Colorful World of Synesthesia</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    A brief introduction to synesthesia, a neurological condition in which the stimulation of one sensory or cognitive pathway leads to involuntary experiences in a different pathway
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link className="group" href="/post/the-colorful-world-of-synesthesia">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy" width={300} height={200}
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={pic}
                                     />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">The Colorful World of Synesthesia</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    A brief introduction to synesthesia, a neurological condition in which the stimulation of one sensory or cognitive pathway leads to involuntary experiences in a different pathway
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link className="group" href="/post/the-colorful-world-of-synesthesia">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy" width={300} height={200}
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={pic}
                                     />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">The Colorful World of Synesthesia</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    A brief introduction to synesthesia, a neurological condition in which the stimulation of one sensory or cognitive pathway leads to involuntary experiences in a different pathway
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Announcement