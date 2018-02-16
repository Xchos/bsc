export const LANGUAGES = { EN: 'en', CS: 'cs' };

const getLanguageSetting = () => {
    const host = window.location.host;
    if (host.indexOf('localhost') !== -1) {
        return LANGUAGES.CS;
    } else {
        const parts = host.split('.');
        const last = parts[parts.length - 1];
        return evaluateDomainCountry(last);
    }
};

const evaluateDomainCountry = (countryCode) => {
    switch (countryCode) {
        case 'cz':
            return LANGUAGES.CS;
        case 'eu':
            return LANGUAGES.EN;
        default:
            return LANGUAGES.CS;
    }
};

export default getLanguageSetting;