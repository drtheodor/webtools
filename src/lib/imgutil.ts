export function getLoadedImageSize(imgElement: HTMLImageElement) {
    return new Promise((resolve: (value: number) => void, reject) => {
        // If image is already loaded
        if (imgElement.complete && imgElement.naturalWidth !== 0) {
            // Create a new request to get the actual file size
            fetch(imgElement.src)
                .then(response => response.blob())
                .then(blob => {
                    resolve(blob.size);
                })
                .catch(reject);
        } else {
            // Wait for image to load
            imgElement.onload = function() {
                fetch(imgElement.src)
                    .then(response => response.blob())
                    .then(blob => {
                        resolve(blob.size);
                    })
                    .catch(reject);
            };
            
            imgElement.onerror = reject;
        }
    });
}

export function getCanvasFileSize(canvas: HTMLCanvasElement, mime: string, quality: number) {
    return new Promise((resolve: (value: number) => void) => {
        canvas.toBlob(blob => {
            resolve(blob!.size);
        }, mime, quality);
    });
}

export function formatBytes(bytes: number) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
    }).format(bytes / Math.pow(k, i)) + ' ' + sizes[i];
}