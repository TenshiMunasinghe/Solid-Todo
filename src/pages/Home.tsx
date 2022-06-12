import axios from 'axios'
import { useSearchParams } from 'solid-app-router'
import { createResource } from 'solid-js'
import { YT } from '../..'
import SearchBar, { FormEvent } from '../components/SearchBar'
import SearchResult from '../components/SearchResult'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [data] = createResource<YT, string>(
    () => searchParams.q || '',
    async q => {
      const res = await axios.get(`/api/search?q=${q}`)
      return res.data
    }
  )

  const onSubmit = (e: FormEvent) => {
    setSearchParams({ q: e.currentTarget.searchText.value })
  }

  return (
    <div class='space-y-8'>
      <SearchBar name='searchText' onSubmit={onSubmit} />
      <SearchResult data={data()?.items} isLoading={data.loading} />
    </div>
  )
}

export default Home
