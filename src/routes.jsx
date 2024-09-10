import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './protected-routes/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';
import Spinner from './components/ui/Spinner';

const RootLayout = lazy(() => import('./layouts/RootLayout'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/dashboard-page'));
const FeedPage = lazy(() => import('./pages/FeedPage'));

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Spinner />}>
                <RootLayout />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Spinner />}>
                <ErrorPage />
            </Suspense>
        ),
        children: [
            {
                path: "login",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <LoginPage />
                    </Suspense>
                ),
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "dashboard",
                        element: (
                            <Suspense fallback={<Spinner />}>
                                <DashboardLayout />
                            </Suspense>
                        ),
                        children: [
                            {
                                path: "",
                                element: (
                                    <Suspense fallback={<Spinner />}>
                                        <DashboardPage />
                                    </Suspense>
                                ),
                            },
                        ],
                    },
                    {
                        path: "feed",
                        element: (
                            <Suspense fallback={<Spinner />}>
                                <FeedPage />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
]);
