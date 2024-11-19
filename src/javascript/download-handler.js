document.querySelectorAll('.document-link').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(link.href);
            if (!response.ok) throw new Error('Network response was not ok');

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);

            const tempLink = document.createElement('a');
            tempLink.href = downloadUrl;
            tempLink.download = link.getAttribute('download');
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Nie udało się pobrać pliku. Spróbuj ponownie później.');
        }
    });
});