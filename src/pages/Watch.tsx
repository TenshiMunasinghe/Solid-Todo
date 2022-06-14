import { useSearchParams } from 'solid-app-router'

interface Props {}

const Watch = (props: Props) => {
  const [searchParam] = useSearchParams()
  return (
    <div class='grid place-items-center'>
      <iframe
        src={`https://www.youtube.com/embed/${searchParam.v}?controls=0&rel=0`}
        class='w-full aspect-video'
      />
    </div>
  )
}

export default Watch
