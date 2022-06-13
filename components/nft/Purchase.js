import { useEffect, useState } from 'react'

import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'
import { useWeb3 } from '@3rdweb/hooks'

const style = {
    button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
    buttonIcon: `text-xl`,
    buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
    const [selectedMarketNft, setSelectedMarketNft] = useState()
    const [enableButton, setEnableButton] = useState(false)
    const { address, connectWallet } = useWeb3()

    // // console.log(listings, selectedNft)

    useEffect(() => {
        if (!listings || isListed === 'false') return
            ; (async () => {
                setSelectedMarketNft(
                    listings.find((marketNft) => {
                        // console.log(parseInt(marketNft.asset?.id._hex, 16).toString(), parseInt(selectedNft.metadata.id._hex, 16).toString())
                        return parseInt(marketNft.asset?.id._hex, 16).toString() === parseInt(selectedNft.metadata.id._hex, 16).toString()
                    })
                )
            })()
    }, [selectedNft, listings, isListed])

    useEffect(() => {
        if (!selectedMarketNft || !selectedNft) return

        setEnableButton(true)
    }, [selectedMarketNft, selectedNft])

    const confirmPurchase = (toastHandler = toast) =>
        toastHandler.success(`Purchase successful!`, {
            style: {
                background: '#04111d',
                color: '#fff',
            },
        })

    const buyItem = async (
        listingId = selectedMarketNft.id,
        quantityDesired = 1,
        module = marketPlaceModule
    ) => {
        // // console.log(listingId, quantityDesired, module, 'david')
        // yo RAZA lets goooo!!! 
        //yo Qazi, ok
        // sure okay about to run it...
        // just clicked buy now...
        // still error
        // where can i see the contract address of the marketplace module
        // in [nftId.js]
        await module
            .buyoutListing(0, 1)
            .catch((error) => console.error(error))

        confirmPurchase()
    }

    // console.log("listed", typeof isListed)

    return (
        <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
            <Toaster position="bottom-left" reverseOrder={false} />
            {isListed === 'true' ? (
                <>
                    <div
                        onClick={() => {
                            enableButton ? buyItem() : null
                        }}
                        className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
                    >
                        <IoMdWallet className={style.buttonIcon} />
                        <div className={style.buttonText}>Buy Now</div>
                    </div>
                    <div
                        className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
                    >
                        <HiTag className={style.buttonIcon} />
                        <div className={style.buttonText}>Make Offer</div>
                    </div>
                </>
            ) : (
                <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
                    <IoMdWallet className={style.buttonIcon} />
                    <div className={style.buttonText}>List Item</div>
                </div>
            )}
        </div>
    )
}

export default MakeOffer