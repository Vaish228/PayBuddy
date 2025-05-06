import React from 'react';
import { Link } from 'react-router-dom';
function NotFound (){
    return(
    <div className = "min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <h1 className = "text-5xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl mb-6 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
        <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200"
      >
        Go Back Home
      </Link>
    </div>
    )
}

export default NotFound;