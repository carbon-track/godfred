const fs = require('fs');
const path = require('path');

const MEDIA_DIR = path.join(process.cwd(), 'public', 'media');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'content', 'media.json');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg', '.mov'];

function getMediaType(ext) {
    if (IMAGE_EXTENSIONS.includes(ext)) return 'image';
    if (VIDEO_EXTENSIONS.includes(ext)) return 'video';
    return null;
}

try {
    if (!fs.existsSync(MEDIA_DIR)) {
        console.log('Media directory not found, creating it...');
        fs.mkdirSync(MEDIA_DIR, { recursive: true });
    }

    const files = fs.readdirSync(MEDIA_DIR);
    const mediaItems = files
        .map(file => {
            const ext = path.extname(file).toLowerCase();
            const type = getMediaType(ext);

            if (!type) return null;

            return {
                type,
                src: `/media/${file}`,
                alt: path.basename(file, ext).replace(/[-_]/g, ' ')
            };
        })
        .filter(item => item !== null);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mediaItems, null, 2));
    console.log(`Generated media.json with ${mediaItems.length} items.`);

} catch (error) {
    console.error('Error generating media JSON:', error);
    process.exit(1);
}
