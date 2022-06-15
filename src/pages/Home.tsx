import { createViewportObserver } from '@solid-primitives/intersection-observer'
import axios from 'axios'
import { useSearchParams } from 'solid-app-router'
import { createResource, createSignal, Show } from 'solid-js'
import { YT } from '../..'
import SearchBar, { FormEvent } from '../components/SearchBar'
import SearchResult from '../components/SearchResult'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pageToken, setPageToken] = createSignal('')
  const [observer] = createViewportObserver()

  const [data] = createResource<YT, { q: string; token: string }>(
    () => ({ q: searchParams.q || '', token: pageToken() }),
    async ({ q, token }, currentData) => {
      const res = await axios.get(`/api/search?q=${q}&pageToken=${token}`)
      const items = [...(currentData?.value?.items || []), ...res.data.items]
      return { ...res.data, items }
    }
  )

  const getNextPage = () => {
    const token = data()?.nextPageToken
    if (!token) return
    setPageToken(token)
  }
  const onSubmit = (e: FormEvent) => {
    setSearchParams({ q: e.currentTarget.searchText.value })
  }

  return (
    <>
      <div class='space-y-8'>
        <SearchBar name='searchText' onSubmit={onSubmit} />
        <SearchResult data={data()?.items} isLoading={data.loading} />
      </div>
      <div
        use:observer={e => {
          if (e.isIntersecting) getNextPage()
        }}>
        <Show when={data.loading}>
          <div class='text-center my-8'>Loading...</div>
        </Show>
      </div>
    </>
  )
}

export default Home
