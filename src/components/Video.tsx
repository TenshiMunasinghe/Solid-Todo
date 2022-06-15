import { YT } from '../../index'

interface Props {
  data: Exclude<YT['items'], undefined | null>[number]
}

const ytLink = (id: string) => `/watch?v=${id}`

const Video = (props: Props) => {
  const data = () => props.data

  return (
    <div class='flex flex-col space-y-3'>
      <a href={ytLink(data().id.videoId)} class='rounded-sm overflow-hidden'>
        <img src={data().snippet.thumbnails.medium.url} alt='video thumbnail' />
      </a>
      <a
        href={ytLink(data().id.videoId)}
        class='hocus:text-neutral-200 hocus:underline'>
        <h2 class='line-clamp-2'>{data().snippet.title}</h2>
      </a>
    </div>
  )
}

export default Video
