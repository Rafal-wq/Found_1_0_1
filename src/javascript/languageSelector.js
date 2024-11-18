import plTranslations from '../languages/pl.js';
import deTranslations from '../languages/de.js';
import uaTranslations from '../languages/ua.js';

class LanguageSelector {
    constructor() {
        this.currentLanguage = 'pl';
        this.translations = {
            pl: plTranslations,
            de: deTranslations,
            ua: uaTranslations
        };
    }

    init() {
        this.updateContent();

        document.querySelectorAll('[data-language]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.changeLanguage(button.dataset.language);
            });
        });
    }

    changeLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.updateContent();
            this.updateActiveButton(lang);
            document.documentElement.lang = lang;
        }
    }

    updateContent() {
        const texts = this.translations[this.currentLanguage];

        document.querySelectorAll('[data-text]').forEach(element => {
            const [section, key] = element.dataset.text.split('-');
            if (texts[section] && texts[section][key]) {
                element.textContent = texts[section][key];

                if (section === 'title' && key === 'smallDonation') {
                    const smallDonationElement = document.querySelector('[data-text="title-smallDonation"]');
                    if (smallDonationElement) {
                        smallDonationElement.textContent = texts.title.smallDonation;
                    }
                }
            }
        });
    }

    updateActiveButton(lang) {
        document.querySelectorAll('[data-language]').forEach(button => {
            button.classList.toggle('active', button.dataset.language === lang);
        });
    }
}

export default new LanguageSelector();