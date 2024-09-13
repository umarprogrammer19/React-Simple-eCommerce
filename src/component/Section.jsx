import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({
    title,
    subtitle,
    text,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    reverseOrder = false
}) => {
    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className={`flex flex-col ${reverseOrder ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>

                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {title}
                        </h1>
                        {subtitle && <h2 className="text-2xl font-semibold text-gray-800 mb-4">{subtitle}</h2>}
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            {text}
                        </p>
                        {buttonText && (
                            <Link
                                to={buttonLink}
                                className="bg-orange-500 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-orange-400 transition-colors"
                            >
                                {buttonText}
                            </Link>
                        )}
                    </div>

                    <div className="md:w-1/2 flex justify-center me-12">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
