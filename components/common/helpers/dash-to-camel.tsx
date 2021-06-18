export const dashToCamel = string => string.replace(/[--]([a-z])/g, m => m[1].toUpperCase())
