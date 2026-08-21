import { Navigate, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../lib/appStore';
export function ProtectedRoute({ children }) { const location=useLocation(); return getCurrentUser() ? children : <Navigate to="/login" replace state={{from:location.pathname}}/>; }
