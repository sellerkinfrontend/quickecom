import "./App.css";
import React from "react";
import Hero from "./components/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LazyContactus = React.lazy(() => import("./components/Contactus"));
const LazyTerms = React.lazy(() => import("./components/TermsOfService"));
const LazyCancel = React.lazy(() => import("./components/Cancellation"));
const LazyPrivacy = React.lazy(() => import("./components/Privacy"));
const LazyShipping = React.lazy(() => import("./components/Shipping"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
    },

    {
      path: "/privacy-policy",
      element: (
        <React.Suspense fallback={<p>Loading...</p>}>
          <LazyPrivacy />
        </React.Suspense>
      ),
    },
    {
      path: "/terms-of-service",
      element: (
        <React.Suspense fallback={<p>Loading...</p>}>
          <LazyTerms />
        </React.Suspense>
      ),
    },
    {
      path: "/cancellation",
      element: (
        <React.Suspense fallback={<p>Loading...</p>}>
          <LazyCancel />
        </React.Suspense>
      ),
    },
    {
      path: "/contactus",
      element: (
        <React.Suspense fallback={<p>Loading...</p>}>
          <LazyContactus />
        </React.Suspense>
      ),
    },
    {
      path: "shipping-policy",
      element: (
        <React.Suspense fallback={<p>Loading...</p>}>
          <LazyShipping />
        </React.Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
