import React from 'react'
import { Navigation } from '../components/nav'
import Link from 'next/link'
import Image from 'next/image'
import pic from '@/public/images/avatar.jpg'
import bg from '@/public/images/Year-end.png'
import chrismast from '@/public/images/Christmas.png'


const Announcement = () => {

    return (
        <div>
            <Navigation />
            <div className='container mx-auto max-w-6xl py-8 mt-[100px] text-white'>
                <h1 className="mb-8 text-center text-2xl font-black text-white">Welcome to our blog!</h1>
                <div className="grid-cols-3 mb-4 grid gap-7">
                    <Link className="group" href="/blog/3">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy"
                                    // width={300} height={200}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={bg}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">YEP 2023</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    Orca xin gửi mọi người thiệp mời tham dự Looker Year-end Party 🎆🎇
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link className="group" href="/blog/4">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy"
                                    // width={300} height={200}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={chrismast}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">YEP 2023</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    Orca xin gửi mọi người thiệp mời tham dự Looker Year-end Party 🎆🎇
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link className="group" href="/blog/3">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy"
                                    // width={300} height={200}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={bg}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">YEP 2023</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    Orca xin gửi mọi người thiệp mời tham dự Looker Year-end Party 🎆🎇
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link className="group" href="/blog/3">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-0">
                                <Image
                                    alt="The Colorful World of Synesthesia"
                                    loading="lazy"
                                    // width={300} height={200}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    decoding="async" data-nimg="1"
                                    className="aspect-video w-full rounded-lg"
                                    src={bg}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">YEP 2023</h2>
                                <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden text-ellipsis">
                                    Orca xin gửi mọi người thiệp mời tham dự Looker Year-end Party 🎆🎇
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