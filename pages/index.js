
//Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import Header from '../components/header'
import PortfolioChart from '../components/chart'
import BuyToken from '../components/buy-tokens'
import Assets from '../components/assets'
import axios from 'axios'
import { getCoins } from '../actions'
import { RobinhoodContext } from '../context/RobinhoodContext'
import { useContext } from 'react'

const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  mainContainer: 'w-2/3 h-full m-auto flex mt-16',
  leftMain: 'flex flex-col w-3/4 h-full  p-6 overflow-y-scroll',
  portfolioAmountContainer: 'flex flex-col ',
  portfolioAmount: 'text-white text-4xl',
  portfolioPercent: 'text-white font-bold text-sm',
  pastHour: 'text-gray-400',
  chartContainer:
    'text-5xl flex justify-center w-full h-1/3 text-white mt-11 mb-8',
  buyingPowerContainer:
    'w-full border-t mb-24 border-b h-16 border-[#30363b] flex justify-between items-center p-4',
  buyingPowerTitle: 'text-white font-bolder text-lg',
  buyingPowerAmount: 'text-white font-bolder text-xl',
  notice: 'flex border border-[#30363b] mx-11 p-5 flex-col flex-1',
  noticeContainer: 'flex-1',
  noticeTitle: 'text-gray-500',
  noticeMessage: 'text-white font-bold',
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
  rightMain:
    'flex flex-col flex-1 h-4/5 bg-[#1E2123] mt-6 rounded-lg overflow-y-scroll noScroll',
  rightMainItem: 'flex items-center text-white p-5 border-b border-[#30363b]',
  ItemTitle: 'flex-1 font-bold',
  moreOptions: 'cursor-pointer text-xl',
}

export default function Home() {
  // console.log("coin host", coins)

  const {balance} = useContext(RobinhoodContext)

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.mainContainer}>
        <div className={styles.leftMain}>
          <div className={styles.portfolioAmountContainer}>
            <div className={styles.portfolioAmount}>{balance} ETH</div>
            <div className={styles.portfolioPercent}>
              +0.0008(+0.57%)
              <span className={styles.pastHour}>Past Hour</span>
            </div>
          </div>
          <div>
            <div className={styles.chartContainer}>
              <PortfolioChart />
            </div>
          </div>
          <div className={styles.buyingPowerContainer}>
            <div className={styles.buyingPowerTitle}>Buying Power</div>
            <div className={styles.buyingPowerAmount}>{balance} ETH</div>
          </div>         
          <div className={styles.notice}>
            <div className={styles.noticeContainer}>
              <div className={styles.noticeTitle}>Send Funds</div>
              <div className={styles.noticeMessage}>
                Transfer your funds here.
              </div>
              <BuyToken />

              <div className="text-gray-600 ">
              For testing purposes you can add the tokens to your Rinkeby Testnet on your metamask
              <ul className='mt-2 leading-7'>
              <li>Bitcoin Contract Address =&gt; 0xb6c16Bf054A97b27Ad601644f231FD61A65E3dc6</li>
              <li>Dogecoin Contract Address =&gt; 0xA94fAC6DA1AB1f550005069c0Ceadf031badf60a</li>
              <li>Solana Contract Address =&gt; 0xE5EDf8AA146037C421664922A5cb29D68a362101</li>
              <li>USDC Contract Address =&gt; 0x2A6FdFF843353fe1241EAc9308e91Ac22179279a</li>
              </ul>
              </div>
            </div>
          </div>
          Notice
        </div>

        

        <div className={styles.rightMain}>
          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>Crypto Currencies</div>
            <BiDotsHorizontalRounded className={styles.moreOptions} />
          </div>

          
          <Assets coin={'BTC'} price={'44,000'} />
          <Assets coin={'ETH'} price={'3,000'} />
          <Assets coin={'SOL'} price={'150'} />
          <Assets coin={'AVAX'} price={'200'} />

          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>Lists</div>
            <AiOutlinePlus className={styles.moreOptions} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

// Home.getInitialProps = async ({ req }) => {
//   const coins = await getCoins();
//   return {
//     props: { coins }
//   }
// }