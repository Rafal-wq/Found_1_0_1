document.addEventListener('DOMContentLoaded', function() {
    const downloadLinks = document.querySelectorAll('.document-link');

    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                e.preventDefault();
                const url = this.href;
                const filename = this.getAttribute('download');

                fetch(url)
                    .then(response => response.blob())
                    .then(blob => {
                        const blobUrl = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.style.display = 'none';
                        a.href = blobUrl;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(blobUrl);
                        document.body.removeChild(a);
                    })
                    .catch(error => {
                        console.error('Download failed:', error);
                        window.location.href = url;
                    });
            }
        });
    });
});