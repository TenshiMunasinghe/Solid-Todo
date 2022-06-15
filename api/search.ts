import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const { q, pageToken } = request.query

    if (!process.env.VITE_API_KEY) {
      response.status(500).send('Invalid Api Key')
      response.end()
      return
    }

    const res = await axios.get(
      encodeURI(
        `https://www.googleapis.com/youtube/v3/search?key=${
          process.env.VITE_API_KEY
        }&type=video&part=snippet&maxResults=24&q=${
          q ? `${q} asmr` : 'asmr バイノーラル'
        }&pageToken=${pageToken}`
      )
    )

    response.status(200).json(res.data)
  } catch (e) {
    console.error(e)
  }
}
