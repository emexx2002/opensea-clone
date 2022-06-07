import React from 'react'


const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center my-4 md:my-4`,
    copyContainer: `w-full sm:w-1/2 my-4 px-4`,
    title: `relative text-white lg:text-[46px] font-semibold md:text-[28px] sm:text-[28px] text-[28px] text-center  md:text-left`,
    description: `text-[#8a939b] container-[400px] lg:text-2xl mt-[0.8rem] mb-[2.5rem] md:text-xl sm:text-xl text-center sm:text-left`,
    ctaContainer: `flex justify-center sm:justify-start`,
    accentedButton: ` relative text-lg font-semibold px-8 py-2 sm:px-12 sm:py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-8 py-2 sm:px-12 sm:py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Discover, collect, and sell extraordinary NFTs
                        </div>
                        <div className={style.description}>
                            OpenSea is the world's first and largest NFT marketplace
                        </div>
                        <div className={style.ctaContainer}>
                            <button className={style.accentedButton}>Explore</button>
                            <button className={style.button}>Create</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img style={{ width: '100%', height: "auto", display: "block", margin: "0 auto" }} className="rounded-t-lg" src="https://lh3.googleusercontent.com/mtOBxi8slFO8Wu2N4Qz-EsEM-eI4j3nK15Q1ZdypUoHy4JQ8CUJDsfIlpzMMhwR9tZvf7DOLdZSsnTyOxKzgn3DzYbDP5aJ-Xxf0gA=s500" />
                        <div className={style.infoContainer}>
                            <img className="h-[2.25rem] rounded-full" src="https://lh3.googleusercontent.com/UuFzH5z1jq2VW5qvtr5NXc_8CSo7_TFpuj3gXmPup4ALc6v7rxgfJXJ58weTYsmzrEFBQRxgKjd9FTxjThZyYx-Fm_EWaH99s5aL-A=s80" alt="lol" />
                            <div className={style.author}>
                                <div className={style.name}>Emexx arts</div>
                                <a className='text-[#1868b7]' target="_blank" href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/103427869407094262821087229208478602045161087427757758115998018748163343515649">CyberTransPunks</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero