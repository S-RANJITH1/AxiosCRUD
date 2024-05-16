import React from 'react';
import AppRoutes from './utils/AppRoutes';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// API base URL
export const API_URL = 'https://65990c7da20d3dc41cef31b0.mockapi.io/ReactApp';

function App() {
  // Create a browser router using the defined routes
  const router = createBrowserRouter(AppRoutes);

  return (
    <>
      {/* Provide the router to the entire app using RouterProvider */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;