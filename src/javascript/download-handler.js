document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.document-link').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            const filename = path.split('/').pop();

            try {
                console.log('Rozpoczynam pobieranie:', path);

                const response = await fetch(path);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);

                console.log('Pobieranie zakończone');
            } catch (error) {
                console.error('Błąd podczas pobierania:', error);
                alert(`Nie udało się pobrać pliku: ${filename}`);
            }
        });
    });
});