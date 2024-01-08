'use client'
import React from 'react'
import { Navigation } from '../components/nav'
import styles from '@/public/styles/member.module.css'
import Image from 'next/image'
import profiles from '@/public/data.json'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
    

    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex flex-wrap items-center justify-center min-h-screen px-4 mx-auto">
                {
                    profiles.map((obj) => {
                        return (
                            <div key={obj.No} className={styles.container} >
                                <div className={styles.card}>
                                    <div className={styles.content}>
                                        <div className={styles.back}>
                                            <button className={styles.back_content} onClick={ () => router.push(`/members/${obj.No}`,)}>
                                                <div className={styles.imgBx}><Image className={styles.img} sizes='100vw' width={100} height={100} src={obj.Color} alt={'Profile Picture'}></Image></div>
                                                <h3 className={styles.name_content}> {obj.Name}<br></br><span className={styles.span}>Developer</span></h3>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default page