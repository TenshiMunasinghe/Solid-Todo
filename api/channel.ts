import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'
import { YTChannel } from '../index'

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    const { id } = request.query

    if (!process.env.VITE_API_KEY) {
      response.status(500).send('Invalid Api Key')
      response.end()
      return
    }

    const res = await axios.get<YTChannel>(
      encodeURI(
        `https://www.googleapis.com/youtube/v3/channels?key=${process.env.VITE_API_KEY}&part=snippet&id=${id}`
      )
    )

    response.status(200).json(res.data.items?.[0].snippet.thumbnails)
  } catch (e) {
    console.error(e)
  }
}
