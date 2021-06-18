export const getUrlHref = params => `${params.isWishListRequested
  ? '/wish/[gender]'
  : '/[gender]/shop/collection/[collection]'
}/category/[category]/subcategory/[subcategory]` +

  `?category=${
    params.category || 'all'
  }&collection=${
    params.collection || 'all'
  }&gender=${
    params.gender
  }&subcategory=${
    params.subcategory || 'all'
  }`
