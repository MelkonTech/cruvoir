export const urlToSitemapXMLItem = params => {
  return `<url>
    <loc>${decodeURI(params.url.replace(/&/g, '&amp;'))}</loc>
    <changefreq>weekly</changefreq>
    ${params.date ? `<lastmod>${new Date(params.date).toISOString()}</lastmod>` : ''}
  </url>`
}
