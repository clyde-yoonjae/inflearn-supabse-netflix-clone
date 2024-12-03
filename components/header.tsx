'use client';

import { useRecoilState } from 'recoil';
import Logo from './logo';
import { searchState } from 'utils/recoil/atoms';

export default function Header() {
  const [search, setSearch] = useRecoilState(searchState);
  return (
    <header className='fixed top-0 left-0 right-0 px-4 py-2 z-50 bg-gray-900 flex items-center justify-between'>
      <nav className='flex gap-4'>
        <Logo />
        <ul className='flex gap-2 text-white'>
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className='w-full max-w-72 flex gap-2 items-center border-white bg-transparent text-white rounded-md p-2'>
        <i className='fas fa-search' />
        <input
          className='bg-transparent'
          placeholder='Search movies'
          value={search}
          onChange={(e) => e.target.value}
        />
      </div>
    </header>
  );
}
