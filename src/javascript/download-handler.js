document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.document-link').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            const filename = path.split('/').pop();

            try {
                const response = await fetch(path, {
                    headers: {
                        'Content-Type': 'application/pdf',
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

            } catch (error) {
                console.error('Błąd podczas pobierania:', error);
                // Spróbuj bezpośrednie przekierowanie jako fallback
                window.location.href = path;
            }
        });
    });
});