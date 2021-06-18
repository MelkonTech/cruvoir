const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  fallbackLng    : 'en',
  localePath     : 'public/static/locales',
  otherLanguages : ['de', 'es', 'fr'],
})
