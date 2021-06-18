export const getUrlAs = params => params.isWishListRequested ? `/wish/${
  params.gender || 'all'
}/category/${
  params.category || 'all'
}/subcategory/${
  params.subcategory || 'all'
}` : `/${
  params.gender || 'all'
}/shop/collection/${
  params.collection || 'all'
}/category/${
  params.category || 'all'
}/subcategory/${
  params.subcategory || 'all'
}`
