import axios from 'axios'
import { createResource, Show } from 'solid-js'
import { Thumbnails, YT } from '../../index'

interface Props {
  video: Exclude<YT['items'], undefined | null>[number]
}

const ytLink = (id: string) => `/watch?v=${id}`

const Video = (props: Props) => {
  const [data] = createResource<Thumbnails, string>(
    () => props.video.snippet.channelId,
    async channelId => {
      const res = await axios.get<Thumbnails>(`/api/channel?id=${channelId}`)
      console.log(res.data)

      return res.data
    }
  )

  return (
    <div class='flex flex-col space-y-3'>
      <a
        href={ytLink(props.video.id.videoId)}
        class='rounded-sm overflow-hidden'>
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt='video thumbnail'
        />
      </a>
      <a
        href={ytLink(props.video.id.videoId)}
        class='hocus:text-neutral-200 hocus:underline flex'>
        <figure class='h-full aspect-square rounded-full'>
          <Show when={!data.loading && data()?.default.url}>
            <img
              src={data()?.default.url}
              alt={props.video.snippet.channelTitle}
            />
          </Show>
        </figure>
        <h2 class='line-clamp-2'>{props.video.snippet.title}</h2>
      </a>
    </div>
  )
}

export default Video
