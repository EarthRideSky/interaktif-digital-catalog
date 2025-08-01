import React from 'react';
const CoverPageLayout = ({ content }) => {
    const { backgroundImage, logo, title } = content;
    return (
        <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center text-white p-8">
                <img src={logo} alt="Client Logo" className="mx-auto mb-8 h-24 object-contain" />
                <h1 className="font-display text-6xl font-bold tracking-wider uppercase">
                    {title}
                </h1>
            </div>
        </div>
    );
};
export default CoverPageLayout;