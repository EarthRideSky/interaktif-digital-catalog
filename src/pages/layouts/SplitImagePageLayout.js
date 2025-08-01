import React from 'react';
const SplitImagePageLayout = ({ content }) => {
    const { leftImage, rightImage } = content;
    return (
        <div className="w-full h-full flex flex-row">
            <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${leftImage})` }}
                aria-label="Left side image"
            />
            <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${rightImage})` }}
                aria-label="Right side image"
            />
        </div>
    );
};
export default SplitImagePageLayout;