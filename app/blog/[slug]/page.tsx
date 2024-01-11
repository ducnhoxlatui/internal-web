import { Navigation } from '@/app/components/nav'
import React from 'react'
import Image from 'next/image'
import pic from '@/public/images/avatar.jpg'
import bg from '@/public/images/Year-end.png'

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
                        <h2 className='text-3xl'>
                            <a href="/posts/earth-the-ultimate-playground">
                                YEP 2023
                            </a>
                        </h2>
                        <div className="flex flex-col justify-between space-y-4 pb-8 md:flex-row md:space-y-0 mt-[10px]"><div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 md:space-y-0">
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
                                <a href="" className="font-medium text-green-600 dark:text-green-200">
                                    Orca
                                </a>
                                <span>on Jan 10, 2024
                                </span>
                            </div>
                        </div>
                        </div>
                        <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700"></hr>
                        <div>
                            <Image
                                alt="The Colorful World of Synesthesia"
                                loading="lazy"
                                // width={300} height={200}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={100}
                                decoding="async" data-nimg="1"
                                className="w-full rounded-lg"
                                src={bg}
                            />
                            <p id="isPasted" className='mt-[25px]'>
                                Hi Team @all.
                                <br></br>
                                Orca xin gửi mọi người thiệp mời tham dự Looker Year-end Party 🎆🎇
                                Mọi thông tin chi tiết về thời gian và địa điểm đã có trong thiệp mời.
                                <br></br>
                                Lưu ý: Party có khách mời đặc biệt là sếp Byeon nên mọi người sắp xếp đến đúng thời gian trên thiệp mời nhé.
                                <br></br>
                                Mặc dù đã có form khảo sát chốt số lượng người tham dự trước đó nhưng nếu thành viên nào đã điền form "không thể tham dự" mà nay đã sắp xếp được lịch trình cá nhân và có thể tham dự thì chủ động liên hệ ORCA để bổ sung danh sách, giúp cho công tác chuẩn bị được chu đáo hơn nhé.
                                <br></br>
                                Cảm ơn mọi người!
                                Orca Team.
                            </p>
                        </div>
                        <hr className="w-full border-t border-zinc-300 mt-[32px] dark:border-zinc-700"></hr>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog