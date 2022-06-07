import Image from 'next/image'
import { useWeb3, } from '@3rdweb/hooks'
import Link from 'next/link'
import React, { useState } from 'react'
import openSeaLogin from '../public/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsCollection } from 'react-icons/bs'
import { MdOutlineAccountBalanceWallet, MdOutlineLogout } from 'react-icons/md'


const style = {
    wrapper: `bg-[#04111d]  w-full px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex-1 mx-[0.8rem] hidden sm:flex  w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-transparent border-0 focus:border-transparent focus:ring-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: `lg:flex items-center justify-end hidden`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
    menuItem: `text-sm flex items-center py-2 px-4 font-bold block w-full whitespace-no-wrap hover:bg-[whitesmoke] bg-transparent text-gray-800`
}

const Header = () => {
    const [show, setShow] = useState(false)
    const { disconnectWallet, } = useWeb3();
    return (
        <div className={style.wrapper}>
            <Link href="/">
                <div className={style.logoContainer}>
                    <Image src={openSeaLogin} className={style.headerIcon} height={40} width={40} />
                    <div className={style.logoText}>Opensea</div>
                </div>
            </Link>
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input className={style.searchInput} type="text" placeholder="Search Collections, Items and accounts" />
            </div>
            <div className={style.headerItems}>
                <Link href="/collections/0xfE2d756733b070A29e802f097EC7141C6f0d12a7">
                    <div className={style.headerItem}>
                        collections
                    </div>
                </Link>
                <div className={style.headerItem}>
                    stats
                </div>
                <div className={style.headerItem}>
                    resources
                </div>
                <div className={style.headerItem}>
                    create
                </div>
                <div className={style.headerIcon}>
                    <CgProfile onClick={() => setShow(!show)} />
                    <div className={`w-[200px] ${show ? "" : "hidden"} rounded-md bg-[#fff] min-h-[80px] absolute top-14 right-8 drop-shadow-md py-2`} >

                        <a
                            href="#pablo"
                            className={
                                style.menuItem
                            }
                            onClick={e => e.preventDefault()}
                        >
                            <CgProfile className="text-[20px] mr-4 " />  Profile

                        </a>
                        <div className="h-0 my-2 border border-solid border-t-1 border-gray-900 opacity-25" />
                        <a
                            href="#pablo"
                            className={
                                style.menuItem
                            }
                            onClick={e => e.preventDefault()}
                        >
                            <BsCollection className="text-[20px] mr-4 " /> collections
                        </a>
                        <div className="h-0 my-2 border border-solid border-t-1 border-gray-900 opacity-25" />
                        <a
                            href="#pablo"
                            className={
                                style.menuItem
                            }
                            onClick={e => {
                                e.preventDefault();
                                disconnectWallet()
                            }
                            }
                        >
                            <MdOutlineLogout className="text-[20px] mr-4 " /> Log out
                        </a>

                    </div>
                </div>
                <div className={style.headerIcon}>
                    <MdOutlineAccountBalanceWallet />
                </div>
            </div>
        </div>
    )
}

export default Header