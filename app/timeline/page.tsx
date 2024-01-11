import React from 'react'
import { Navigation } from '../components/nav'

const Timeline = () => {
    return (
        <>
            <Navigation />
            <section className="items-center py-16 lg:h-screen font-poppins">
                <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center ">
                            <div className="relative flex flex-col items-center">
                                <div
                                    className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                                    TIMELINE
                                </div>
                                <h1 className="text-5xl font-bold leading-tight dark:text-white"> Looker Team <span
                                    className="text-blue-500"> Timeline
                                </span> </h1>
                                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-blue-200">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-400">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-600">
                                    </div>
                                </div>
                            </div>
                            <p className="mb-16 text-base text-left text-gray-500 leading-relaxed font-semibold tracking-wide">
                                Embark on a journey with us as we explore the milestones that have
                                shaped our team. Driven by innovation and bound by a shared passion,
                                each moment in our timeline reflects our commitment to excellence
                                and transformative impact. Discover the story of how we challenge
                                the status quo and redefine possibilities.
                            </p>

                        </div>
                    </div>
                    <div className="w-full mx-auto lg:max-w-3xl">
                    <div className="relative flex justify-between">
                            <div className="hidden w-24 py-3 md:block ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2002-2005</h2>
                            </div>
                            <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2002-2005</h2>
                            </div>
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div
                                        className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                            </path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-blue-300"></div>
                            </div>
                            <div className="relative flex-1 mb-16 bg-white rounded shadow md:mb-8 dark:bg-gray-900">
                                <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                    <div
                                        className="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 drop-shadow-lg">
                                    </div>
                                </div>
                                <div className="relative z-20 p-6">
                                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">PI11: Looker Team Expanding</p>
                                    <p className="text-gray-700 dark:text-gray-500">
                                        We are thrilled to announce that 4 new members have recently joined the Looker team!
                                        Nhan Nguyen Phuoc Vy, Tran Huynh Bao, Duc Nguyen Minh, Phuong Tran Cuc
                                    </p>
                                </div>
                            </div>  
                        </div>
                        <div className="relative flex justify-between">
                            <div className="hidden w-24 py-3 md:block ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2002-2005</h2>
                            </div>
                            <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2002-2005</h2>
                            </div>
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div
                                        className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                            </path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-blue-300"></div>
                            </div>
                            <div className="relative flex-1 mb-16 bg-white rounded shadow md:mb-8 dark:bg-gray-900">
                                <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                    <div
                                        className="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 drop-shadow-lg">
                                    </div>
                                </div>
                                <div className="relative z-20 p-6">
                                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">PI10: Looker Team Expanding</p>
                                    <p className="text-gray-700 dark:text-gray-500">
                                        We are thrilled to announce that 7 new members have recently joined the Looker team!
                                        Phuc Nguyen Hong, Hien Nguyen Thi Thuy, Cong Vo , Khanh Duong Minh, Xuan Le, Anh Nguyen, Phuc Nguyen Tuan Hoang
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-between">
                            <div className="hidden w-24 py-3 md:block ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2002-2005</h2>
                            </div>
                            <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2002-2005</h2>
                            </div>
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div
                                        className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                            </path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-blue-300"></div>
                            </div>
                            <div className="relative flex-1 mb-16 bg-white rounded shadow md:mb-8 dark:bg-gray-900">
                                <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                    <div
                                        className="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 drop-shadow-lg">
                                    </div>
                                </div>
                                <div className="relative z-20 p-6">
                                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">PI9: Looker Team Expanding</p>
                                    <p className="text-gray-700 dark:text-gray-500">
                                        We are thrilled to announce that 6 new members have recently joined the Looker team!
                                        Hien Nguyen Thi Thu, Giang Nguyen Kieu, Kim Tran, Tho Nguyen, Huy Doan, An Banh
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-between">
                            <div className="hidden w-24 py-3 md:block ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2005-2009</h2>
                            </div>
                            <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2005-2009</h2>
                            </div>
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div
                                        className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                            </path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-blue-300"></div>
                            </div>
                            <div className="relative flex-1 mb-16 bg-white rounded shadow md:mb-8 dark:bg-gray-900">
                                <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                    <div
                                        className="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 drop-shadow-lg">
                                    </div>
                                </div>
                                <div className="relative z-20 p-6">
                                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">PI8: Looker Team Expanding</p>
                                    <p className="text-gray-700 dark:text-gray-500">
                                        Congratulations to the 10 trainees who have successfully completed their training period, and welcome new 2 members.We are excited to officially welcome you to the Looker Team.
                                        Nguyen Nguyen Duy, Bao Nguyen Le Gia, Linh Tran Quang, Quoc Nguyen Anh, Nhien Chau, Thu Nguyen Hoang Anh, Dat Bui Duy, Tuan Dang, Quynh Nguyen Ngan, Long Nguyen Pham Thang, Hien Ho
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-between">
                            <div className="hidden w-24 py-3 md:block ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2009-2014</h2>
                            </div>
                            <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2009-2014</h2>
                            </div>
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div
                                        className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                            </path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-blue-300"></div>
                            </div>
                            <div className="relative flex-1 mb-16 bg-white rounded shadow md:mb-8 dark:bg-gray-900">
                                <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                    <div
                                        className="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 drop-shadow-lg">
                                    </div>
                                </div>
                                <div className="relative z-20 p-6">
                                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">PI7: Looker Team Expanding</p>
                                    <p className="text-gray-700 dark:text-gray-500">
                                        We are thrilled to announce that 11 new members have recently joined the Looker team!
                                        Bao Dinh, Thien Nguyen Thai, Khanh Duong Quoc, Huy Nguyen Thai, Lich Hoang, Vinh Vo, Thinh Huynh, Huy Nguyen Tan, Thinh Le Ngoc, Phi Tran Nhat, Nhat Quach
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-between">
                            <div className="hidden w-24 py-3 md:block ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2014-till</h2>
                            </div>
                            <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                                <h2 className="text-base font-medium text-gray-700 dark:text-gray-400">2014-till</h2>
                            </div>
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div
                                        className="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-clock" viewBox="0 0 16 16">
                                            <path
                                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z">
                                            </path>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-blue-300"></div>
                            </div>
                            <div className="relative flex-1 bg-white rounded shadow dark:bg-gray-900">
                                <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                    <div
                                        className="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 drop-shadow-lg">
                                    </div>
                                </div>
                                <div className="relative z-20 p-6">
                                    <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">PI 6: Looker Established</p>
                                    <p className="text-gray-700 dark:text-gray-500">
                                        Welcome Thuong Huynh, Thinh Do, Hai To.
                                        Their collaboration marked the beginning of Looker's innovative journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Timeline