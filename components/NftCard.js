import React, { useState, useEffect } from 'react'
import { BiHeart } from 'react-icons/bi'
import Router from 'next/router'

const style = {
    wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
    imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
    nftImg: `w-full object-cover`,
    details: `p-3`,
    info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
    infoLeft: `flex-0.6 flex-wrap`,
    collectionName: `font-semibold text-sm text-[#8a939b]`,
    assetName: `font-bold text-lg mt-2`,
    infoRight: `flex-0.4 text-right`,
    priceTag: `font-semibold text-sm text-[#8a939b]`,
    priceValue: `flex items-center text-xl font-bold mt-2`,
    ethLogo: `h-5 mr-2`,
    likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
    likeIcon: `text-xl mr-2`,
}


const NftCard = ({ nftItem, title, listings }) => {
    const [islisted, setIsListed] = useState(false)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        const listing = listings.find((listing) => listing.asset.id === nftItem.id)
        if (Boolean(listing)) {
            setIsListed(true)
            setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
        }
        // for (const listing of listings) {
        //     if (listing.asset.id === nftItem.id) {
        //         setIsListed(true)
        //         setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
        //         break
        //     }
        // }



    }, [listings, nftItem])


    return (
        <div className={style.wrapper}
            onClick={() => {
                Router.push({
                    pathname: `/nfts/${nftItem.id}`,
                    query: { isListed: islisted }
                })
            }}
        >
            <div className={style.imgContainer}>
                <img className={style.nftImg} src={nftItem.image} alt="" />
            </div>
            <div className={style.details}>
                <div className={style.info}>
                    <div className={style.infoLeft}>
                        <div className={style.collectionName}>
                            {title}
                        </div>
                        <div className={style.assetName}>
                            {nftItem.name}
                        </div>
                    </div>
                    {islisted && (
                        <div className={style.infoRight}>
                            <div className={style.priceTag}>price</div>
                            <div className={style.priceValue}>
                                <img src="https://static.opensea.io/general/ETH.svg" className={style.ethLogo} />{price}
                            </div>
                        </div>
                    )}
                </div>
                <div className={style.likes}>
                    <div className={style.likeIcon}>
                        <span>
                            <BiHeart />
                        </span>
                        {' '}{nftItem.likes}

                    </div>
                </div>
            </div>


        </div>

    )
}

export default NftCard