import { RobinhoodContext } from "../../context/RobinhoodContext"
import { useContext } from "react"


const styles = {
  inputAmount: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
  formContainer: `flex items-center`,
  select: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
  options: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white`,
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
}


export default function BuyToken() {

  const {
    isAuthenticated,
    setAmount,
    mint,
    setCoinSelect,
    coinSelect,
    toCoin,
    amount,
    setToCoin,
  } = useContext(RobinhoodContext)

  return (
    <form className={styles.formContainer}>
      <div className="flex h-full w-full flex-col items-center">
        <select
          value={coinSelect}
          onChange={(e) => setCoinSelect(e.target.value)}
          className={styles.select}>
          <option className={styles.options} value="BTC">BTC</option>
          <option className={styles.options} value="ETH">ETH</option>
          <option className={styles.options} value="DOGE">DOGE</option>
          <option className={styles.options} value="SOL">SOL</option>
          <option className={styles.options} value="USDC">USDC</option>
        </select>
        <select
          value={toCoin}
          onChange={(e) => setToCoin(e.target.value)} 
          className={styles.select}>
          <option className={styles.options} value="BTC">BTC</option>
          <option className={styles.options} value="DOGE">DOGE</option>
          <option className={styles.options} value="SOL">SOL</option>
          <option className={styles.options} value="USDC">USDC</option>
        </select>
        <input
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className={styles.inputAmount} 
          type="text" 
          placeholder="Amount..." />

        <button 
          disabled={!isAuthenticated}
          onClick={() => mint()}
          className={styles.noticeCTA}
          type="button"
          >Send</button>
      </div>
    </form>
  )
}