"use client";

import { useState, useCallback, useEffect, useRef } from 'react';

// Helper component to play video using Blob URL to mitigate IDM popups
function SafeVideoPlayer({ src, className }) {
    const [blobUrl, setBlobUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        setLoading(true);

        fetch(src)
            .then(res => res.blob())
            .then(blob => {
                if (active) {
                    const url = URL.createObjectURL(blob);
                    setBlobUrl(url);
                    setLoading(false);
                }
            })
            .catch(() => setLoading(false));

        return () => {
            active = false;
            if (blobUrl) URL.revokeObjectURL(blobUrl);
        };
    }, [src]);

    if (loading) {
        return (
            <div className={`flex items-center justify-center bg-transparent ${className}`}>
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
            </div>
        );
    }

    return (
        <video
            controls
            className={className}
        >
            <source src={blobUrl} />
            Your browser does not support the video tag.
        </video>
    );
}

export default function GalleryGrid({ items }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filter, setFilter] = useState('all');

    // Filter items based on selection
    const filteredItems = items?.filter(item => {
        if (filter === 'all') return true;
        return item.type === filter;
    });

    // Handle closing modal
    const closeModal = () => setSelectedItem(null);

    // Handle keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Handle hover play for grid videos
    const handleMouseEnter = (e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) video.play().catch(() => { });
    };

    const handleMouseLeave = (e) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    if (!items || items.length === 0) {
        return <p className="text-center text-gray-500 py-12">No media found.</p>;
    }

    return (
        <div>
            {/* Filter Tabs */}
            <div className="flex justify-center gap-2 mb-12">
                {['all', 'image', 'video'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === type
                            ? 'bg-black text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1) + (type === 'all' ? '' : 's')}
                    </button>
                ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
                {filteredItems.map((item, index) => (
                    <div
                        key={`${item.src}-${index}`}
                        className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-gray-100 cursor-zoom-in"
                        onClick={() => setSelectedItem(item)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={item.alt || 'Gallery image'}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        ) : (
                            <div className="relative">
                                {/* Grid preview: Video thumbnail with hover-to-play */}
                                <video
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    onLoadedMetadata={(e) => { e.target.currentTime = 0.1; }}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                >
                                    <source src={item.src} />
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none">
                                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-0 transition-transform duration-300">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {item.alt && (
                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                                <p className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 drop-shadow-md">
                                    {item.alt}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedItem.type === 'image' ? (
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.alt}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        ) : (
                            <SafeVideoPlayer
                                src={selectedItem.src}
                                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                            />
                        )}
                        {selectedItem.alt && (
                            <div className="absolute bottom-[-3rem] left-0 right-0 text-center">
                                <p className="text-white/90 font-medium text-lg">{selectedItem.alt}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
