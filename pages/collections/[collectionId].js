import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import React, { useMemo, useState, useEffect } from 'react'
import Header from '../../components/Header'
import NftCard from '../../components/NftCard'
import { fNumber, fShortenNumber } from '../../utils/formatNumber'
import { client } from '../../lib/sanityClient'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'


const style = {
  bannerImageContainer: `h-[30vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex md:justify-end  justify-center text-white mb-8 mt-3 mr-6`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem] `,
  socialIconsWrapper: `w-44 md:mr-4 lg:mr-12`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: ` text-3xl text-center md:text-5xl font-bold my-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[90vw] sm:w-[44vw] flex justify-between px-2 py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `sm:w-1/4`,
  statValue: `text-xl md:text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: ` text-sm md:text-lg  w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}

const Collection = () => {
  const router = useRouter()
  const { provider } = useWeb3()
  const { collectionId } = router.query
  const [collection, setCollection] = useState([])
  const [nfts, setNtfts] = useState([])
  const [listings, setListings] = useState([])

  // https://eth-rinkeby.alchemyapi.io/v2/odu8FkyGpdUrkuoDvFX_C0WQE7n1X-Dz

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/odu8FkyGpdUrkuoDvFX_C0WQE7n1X-Dz'
    )
    return sdk.getNFTModule(collectionId)

  }, [provider])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/odu8FkyGpdUrkuoDvFX_C0WQE7n1X-Dz'
    )
    return sdk.getMarketplaceModule('0x144929958ebAEaEDCd759C90AD6E1226634D5D6B')
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
      ; (async () => {
        setListings(await marketPlaceModule.getAllListings())
      })()
  }, [marketPlaceModule])


  const fetchCollectionData = async (sanityClient = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
      "imageUrl": profileImage.asset->url,
      "bannerImageUrl": bannerImage.asset->url,
      volumeTraded,
      createdBy,
      contractAddress,
      "creator": createdBy->userName,
      title, floorPrice,
      "allOwners": owners[]->,
      description
    }`

    const collectionData = await sanityClient.fetch(query)

    console.log(collectionData, '🔥')

    // the query returns 1 object inside of an array
    await setCollection(collectionData[0])
  }

  useEffect(() => {
    fetchCollectionData()
  }, [collectionId])


  useEffect(() => {
    if (!nftModule) return
      ; (async () => {

        const nfts = await nftModule.getAll()
        setNtfts(nfts)

      })()

  }, [nftModule])


  return (
    <div className="overflow-hidden">
      <Header />
      <div className={style.bannerImageContainer}>
        <img className={style.bannerImage} src={collection?.bannerImageUrl ? collection.bannerImageUrl : "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FZVyfx9LFkujkECDExG4USNL_lt-yD6dHQoFLx2ZYealUdDY-vvGwji1E0NhA7smLPPIbpO5zURtDcAtpR5in5A8y5CqgOZooeWEFUw%3Ds10000?fit=max&h=2500&w=2500&auto=format&s=feaee6bdc9c0f04ba7afff605816f214"} />

      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img className={style.profileImg} src={collection?.imageUrl ? collection.imageUrl : "https://img-ae.seadn.io/https%3A%2F%2Flh3.googleusercontent.com%2FZVyfx9LFkujkECDExG4USNL_lt-yD6dHQoFLx2ZYealUdDY-vvGwji1E0NhA7smLPPIbpO5zURtDcAtpR5in5A8y5CqgOZooeWEFUw%3Ds10000?fit=max&h=2500&w=2500&auto=format&s=feaee6bdc9c0f04ba7afff605816f214"} />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider} />
                <div className={`${style.socialIcon} `}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}>{collection?.title}</div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>created by <span className="text-[#2081e2]">{collection?.creator}</span></div>
        </div>
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                {nfts.length}
              </div>
              <div className={style.statName}>
                items
              </div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                {collection?.allOwners ? collection.allOwners.length : ""}
              </div>
              <div className={style.statName}>
                owners
              </div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img src="https://static.opensea.io/general/ETH.svg" className={style.ethLogo} />
                {collection?.floorPrice}
              </div>
              <div className={style.statName}>
                floor price
              </div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img src="https://static.opensea.io/general/ETH.svg" className={style.ethLogo} />
                {fShortenNumber(collection?.volumeTraded)}
              </div>
              <div className={style.statName}>
                volume traded
              </div>
            </div>


          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.description}>
            {collection?.description}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {nfts.map((nftItem, id) => (
          <NftCard key={id} nftItem={nftItem} title={collection?.title} listings={listings} />
        ))}
      </div>
      {/* {router.query.collectionId} */}
    </div>
  )
}

export default Collection