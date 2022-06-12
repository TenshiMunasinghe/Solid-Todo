import { AiOutlineSearch } from 'solid-icons/ai'

export type FormEvent = Event & {
  submitter: HTMLElement
} & {
  currentTarget: HTMLFormElement
  target: Element
}

interface Props {
  name: string
  onSubmit: (e: FormEvent) => void
}

const SearchBar = (props: Props) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        props.onSubmit(e)
      }}
      class='focus-within:ring-2 max-w-xs w-full flex ring-neutral-400 rounded-sm'>
      <input
        placeholder='search ASMR'
        class='bg-neutral-600 outline-none p-2 flex-1'
        name={props.name}
      />
      <button type='submit' class='px-5 bg-neutral-700 hover:bg-neutral-500'>
        <AiOutlineSearch aria-label='search' />
      </button>
    </form>
  )
}

export default SearchBar
