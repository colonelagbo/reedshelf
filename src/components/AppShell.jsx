import { NavLink, useNavigate } from 'react-router-dom';
import { BookOpen, Home, Library, ListChecks, Settings, UserCircle, Upload, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getCurrentUser, logoutUser } from '../lib/appStore';
import { LogoPlaceholder } from './LogoPlaceholder';

const nav = [
  { to: '/app/home', label: 'Home', icon: Home },
  { to: '/app/library', label: 'Library', icon: Library },
  { to: '/app/upload', label: 'Upload book', icon: Upload },
  { to: '/app/reading-plans', label: 'Reading plans', icon: ListChecks },
];

export function AppShell({ children }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();
  const logout = () => { logoutUser(); navigate('/login'); };
  return <div className="min-h-screen bg-[#f8f7f2] text-[#18332b]">
    <header className="sticky top-0 z-40 border-b border-[#dfe5dc] bg-[#f8f7f2]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4"><button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button><LogoPlaceholder compact /></div>
        <div className="flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-semibold">{user?.name || 'Reader'}</p><p className="text-xs text-[#7b8c84]">{user?.email || ''}</p></div><NavLink to="/app/profile" className="grid h-10 w-10 place-items-center rounded-full border border-[#d5ddd1] bg-white"><UserCircle size={22}/></NavLink></div>
      </div>
    </header>
    <div className="mx-auto flex max-w-[1500px]">
      <aside className={`${open ? 'fixed inset-y-16 left-0 z-30 block w-72' : 'hidden'} lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)] lg:w-64 lg:shrink-0 border-r border-[#dfe5dc] bg-[#f8f7f2]`}>
        <div className="flex h-full flex-col p-4">
          <div className="mb-5 rounded-2xl bg-[#18332b] p-4 text-white"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#d9f26c] text-[#18332b]"><BookOpen size={20}/></span><div><p className="text-sm font-semibold">Your bookshelf</p><p className="text-xs text-white/60">Plan, Read, Track</p></div></div></div>
          <nav className="space-y-1">{nav.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({isActive}) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-[#e4eddc] text-[#18332b]' : 'text-[#667b72] hover:bg-white hover:text-[#18332b]'}`}><Icon size={18}/>{label}</NavLink>)}</nav>
          <div className="mt-auto space-y-1 border-t border-[#dfe5dc] pt-4"><NavLink to="/app/profile" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#667b72] hover:bg-white hover:text-[#18332b]"><UserCircle size={18}/>Profile</NavLink><NavLink to="/app/settings" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#667b72] hover:bg-white hover:text-[#18332b]"><Settings size={18}/>Settings</NavLink><button onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-[#8b5e55] hover:bg-white"><LogOut size={18}/>Log out</button></div>
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
    </div>
  </div>;
}
