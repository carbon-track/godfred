"use client";

import { useState, useEffect } from 'react';
import { PillButton, Surface } from './elements';

// Helper component to play video using Blob URL to mitigate IDM popups
function SafeVideoPlayer({ src, className }) {
    const [blobUrl, setBlobUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        let objectUrl = null;

        fetch(src)
            .then(res => res.blob())
            .then(blob => {
                objectUrl = URL.createObjectURL(blob);
                if (active) {
                    setBlobUrl(objectUrl);
                    setLoading(false);
                } else {
                    URL.revokeObjectURL(objectUrl);
                }
            })
            .catch(() => {
                if (active) setLoading(false);
            });

        return () => {
            active = false;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
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
    const hasImages = items?.some(item => item.type === 'image');
    const hasVideos = items?.some(item => item.type === 'video');
    const [filter, setFilter] = useState(hasImages ? 'image' : 'video');

    // Filter items based on selection
    const filteredItems = items?.filter(item => item.type === filter);

    // Handle closing modal
    const closeModal = () => setSelectedItem(null);

    // Handle keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        globalThis.addEventListener('keydown', handleKeyDown);
        return () => globalThis.removeEventListener('keydown', handleKeyDown);
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
        return (
            <Surface variant="muted" className="mx-auto max-w-3xl text-center text-gray-500">
                No media found.
            </Surface>
        );
    }

    return (
        <div>
            {/* Filter Tabs */}
            <div className="flex justify-center gap-2 mb-12">
                {hasImages && (
                    <PillButton
                        active={filter === 'image'}
                        onClick={() => setFilter('image')}
                    >
                        Photos
                    </PillButton>
                )}
                {hasVideos && (
                    <PillButton
                        active={filter === 'video'}
                        onClick={() => setFilter('video')}
                    >
                        Videos
                    </PillButton>
                )}
            </div>

            {/* Masonry Grid */}
            {filteredItems.length === 0 ? (
                <Surface variant="muted" className="mx-auto max-w-md text-center text-gray-500 py-12">
                    No {filter === 'image' ? 'photos' : 'videos'} to display.
                </Surface>
            ) : (
            <div className={`gap-6 space-y-6 ${filter === 'video' ? 'w-full max-w-7xl mx-auto space-y-10' : 'columns-1 sm:columns-2 lg:columns-3'}`}>
                {filteredItems.map((item, index) => (
                    <Surface
                        key={`${item.src}-${index}`}
                        variant="muted"
                        padding="none"
                        className={`relative overflow-hidden !rounded-lg ${filter === 'video' ? 'cursor-default w-full' : 'break-inside-avoid group cursor-zoom-in'}`}
                        onClick={() => setSelectedItem(item)}
                        onMouseEnter={filter === 'video' ? undefined : handleMouseEnter}
                        onMouseLeave={filter === 'video' ? undefined : handleMouseLeave}
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={item.alt || 'Gallery image'}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        ) : (
                            <div className="relative aspect-video w-full" onClick={(e) => e.stopPropagation()}>
                                <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="absolute inset-0 w-full h-full object-cover"
                                >
                                    <source src={item.src} />
                                </video>
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
                    </Surface>
                ))}
            </div>
            )}

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
