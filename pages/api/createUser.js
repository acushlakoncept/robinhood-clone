import { client } from "../../lib/sanity"

export default async function createUser(req, res) {
  try {
    const userDoc = {
      _type: 'users',
      _id: req.body.walletAddress,
      userName: 'Unnamed',
      address: req.body.walletAddress,
    }
    await client.createIfNotExists(userDoc)
    res.status(200).json({ message: 'success' })
  } catch (error) {
    res.status(500).json({ message: 'error', data: error.message })
  }
}
