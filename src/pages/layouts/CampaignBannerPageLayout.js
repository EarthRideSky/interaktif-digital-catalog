import React from 'react';
const CampaignBannerPageLayout = ({ content }) => {
    const { backgroundImage, title, promoSticker, productImages, terms } = content;
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-cover bg-center text-white"
             style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 text-center">
                {promoSticker && (
                    <div className="inline-block px-6 py-2 mb-4 text-lg font-bold text-white rounded-md"
                         style={{ backgroundColor: promoSticker.backgroundColor }}>
                        {promoSticker.text}
                    </div>
                )}
                <h1 className="font-display text-5xl md:text-7xl font-bold uppercase mb-8">
                    {title}
                </h1>
                {productImages && (
                    <div className="flex justify-center items-center gap-8 mb-8">
                        {productImages.map((src, index) => (
                            <img key={index} src={src} alt={`Campaign product ${index + 1}`} className="h-32 w-32 object-contain" />
                        ))}
                    </div>
                )}
            </div>
            {terms && (
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-xs text-white/70">
                    {terms}
                </p>
            )}
        </div>
    );
};
export default CampaignBannerPageLayout;