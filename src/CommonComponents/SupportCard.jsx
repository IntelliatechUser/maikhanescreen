import React from 'react';

const SupportCard = ({ title, description, Icon, buttonTitle, number, handleRedirect }) => (
    <div className="p-6 max-w-sm bg-white rounded-lg shadow cursor-pointer" onClick={handleRedirect ? handleRedirect : ''}>
        <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-customOrange rounded-full p-3">
                <img src={Icon} alt={`icon-${title}`} />
            </span>
            {number ? <span className="inline-block p-3">
                <h1 className="text-2xl font-[700]">{number}</h1>
            </span> : <></>}
        </div>
        <h3 className="text-lg font-[500] text-gray-500">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {buttonTitle ? <button className="mt-4 px-4 py-2 bg-customOrange text-white rounded-[1.5rem]">
            Connect with sales support
        </button> : <></>}
    </div>
);

export default SupportCard;
