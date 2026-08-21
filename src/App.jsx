import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogArticle } from './pages/BlogArticle';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Library } from './pages/Library';
import { Upload } from './pages/Upload';
import { Reader } from './pages/Reader';
import { ReadingPlans } from './pages/ReadingPlans';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { getCurrentUser } from './lib/appStore';

function GuestRoute({children}){return getCurrentUser()?<Navigate to="/app/home" replace/>:children}
function Protected({children}){return <ProtectedRoute>{children}</ProtectedRoute>}
export default function App(){return <BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/blog" element={<Blog/>}/><Route path="/blog/:slug" element={<BlogArticle/>}/><Route path="/login" element={<GuestRoute><Login/></GuestRoute>}/><Route path="/register" element={<GuestRoute><Register/></GuestRoute>}/><Route path="/app" element={<Navigate to="/app/home" replace/>}/><Route path="/app/home" element={<Protected><Dashboard/></Protected>}/><Route path="/app/library" element={<Protected><Library/></Protected>}/><Route path="/app/upload" element={<Protected><Upload/></Protected>}/><Route path="/app/reader/:bookId" element={<Protected><Reader/></Protected>}/><Route path="/app/reading-plans" element={<Protected><ReadingPlans/></Protected>}/><Route path="/app/profile" element={<Protected><Profile/></Protected>}/><Route path="/app/settings" element={<Protected><Settings/></Protected>}/><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter>}
