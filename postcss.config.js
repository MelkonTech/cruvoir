/* eslint-disable */
module.exports = {
  parser: false,

  plugins: {
    'postcss-preset-env': {
      features: {
        'color-functional-notation': true,
        'custom-media-queries'     : true,
        'double-position-gradients': true,
        'gap-properties'           : true,
        'matches-pseudo-class'     : true,
        'media-query-ranges'       : true,
        'nesting-rules'            : true,
        'not-pseudo-class'         : true,
        'overflow-property'        : true,
        'place-properties'         : true,
      },

      importFrom: './public/static/media.css',
      stage: false,
    },
  },
};
