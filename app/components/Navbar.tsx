"use client"
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import {auth} from "@/auth"
import { signOut, signIn } from 'next-auth/react'
import { Signika } from 'next/font/google'

const Navbar = async () => {
    const session = await auth();




    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                {/* only want to render if user is logged in */}
                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                        <Link href="/startup/create">
                            <span>
                            Create
                            </span>
                        </Link>

                        <button onClick={signOut}>
                            <span>logout</span>

                        </button>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                        </>
                    ) : (
                        <button onClick={signIn(provider: 'github')} >
                            <span>Login</span>
                        </button>
                    )}

                </div>
            </nav>
        
        </header>
    )
}

export default Navbar