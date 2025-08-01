import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
const ErrorLayout = ({ layoutType }) => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-accent text-white p-8">
        <ExclamationTriangleIcon className="h-16 w-16 mb-4" />
        <h2 className="font-display text-3xl font-bold mb-2">Render Error</h2>
        <p>
            An unknown layout type was specified: 
            <code className="bg-black/20 px-2 py-1 rounded-md ml-2">{layoutType}</code>
        </p>
    </div>
);
export default ErrorLayout;