import { Home as HomeIcon, Search, Library } from 'lucide-react'

export function SideBar() {
  return(
    <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-9'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot hits Brasil</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funk</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist #13</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock milgrau</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Dance</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Musica de anime</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Piseiro</a>
          </nav>
        </aside>
  )
}