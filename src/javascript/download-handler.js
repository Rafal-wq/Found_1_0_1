import { PDF_LINKS } from '../config/documents';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.document-link').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const docType = link.getAttribute('data-doc');
            const downloadUrl = PDF_LINKS[docType];

            try {
                window.open(downloadUrl, '_blank');

            } catch (error) {
                console.error('Błąd podczas pobierania:', error);
                alert('Wystąpił błąd podczas pobierania dokumentu. Spróbuj ponownie później.');
            }
        });
    });
});