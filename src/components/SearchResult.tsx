import { For, Show } from 'solid-js'
import { YT } from '../../index'
import Video from './Video'

interface Props {
  data: YT['items']
  isLoading: boolean
}

const SearchResult = (props: Props) => {
  return (
    <div class=''>
      <Show
        when={!props.data?.length && !props.isLoading}
        fallback={
          <div class='grid grid-cols-4 gap-6'>
            <For each={props.data}>{item => <Video data={item} />}</For>
          </div>
        }>
        <div>No Result</div>
      </Show>
    </div>
  )
}

export default SearchResult
