import { Navigation } from '@/app/components/nav'
import React from 'react'
import Image from 'next/image'
import pic from '@/public/images/avatar.jpg'

const Blog = () => {

    return (
        <div>
            <Navigation />
            <div className='mx-auto flex flex-col justify-center text-white mt-[100px]'>
                <div className='mx-auto flex w-full flex-col items-start justify-center px-4 md:flex-row'>
                    <div className="mt-4 flex justify-start pb-4 md:justify-center md:pb-0 md:pr-20">
                        <a className="rounded-full border border-zinc-100 bg-white p-2 text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300" href="/">
                            <svg height="20" width="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 6.29291C14.0976 6.68343 14.0976 7.31658 13.7071 7.7071L7.41422 14H25C25.5522 14 26 14.4477 26 15C26 15.5523 25.5522 16 25 16H7.41422L13.7071 22.2928C14.0976 22.6834 14.0976 23.3166 13.7071 23.7072C13.3166 24.0976 12.6834 24.0976 12.2929 23.7072L4.2929 15.7071C3.90236 15.3166 3.90236 14.6834 4.2929 14.2929L12.2929 6.29291C12.6834 5.90236 13.3166 5.90236 13.7071 6.29291Z" fill="currentColor">
                            </path>
                            </svg>
                        </a>
                    </div>
                    <div className='mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4'>
                        <h2>
                            <a href="/posts/earth-the-ultimate-playground">
                                Earth: The Ultimate Playground
                            </a>
                        </h2>
                        <div className="flex flex-col justify-between space-y-4 pb-8 md:flex-row md:space-y-0"><div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 md:space-y-0">
                            <a href="/author/jane-doe">
                                <Image
                                    alt="Earth: The Ultimate Playground"
                                    loading="lazy"
                                    width={44}
                                    height={44}
                                    // fill={true}
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-[44px] rounded-full"
                                    src={pic} />
                            </a>
                            <div className="flex space-x-1">
                                <span>by</span>
                                <a href="/author/jane-doe" className="font-medium text-green-600 dark:text-green-200">
                                    Jane Doe
                                </a>
                                <span>on Jan 3, 2023
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog