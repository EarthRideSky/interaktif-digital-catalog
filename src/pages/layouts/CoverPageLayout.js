import React from 'react';
const CoverPageLayout = ({ content }) => {
    const { backgroundImage, logo, title } = content;
    return (
        <div className="relative w-full h-full">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white p-8">
                <img src={logo} alt="Client Logo" className="mb-8 h-24 max-w-xs object-contain" />
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider uppercase">
                    {title}
                </h1>
            </div>
        </div>
    );
};
export default CoverPageLayout;