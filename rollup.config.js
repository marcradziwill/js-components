import fs from 'fs';
import { terser } from 'rollup-plugin-terser';
import { join } from 'path';

const terserPlugin = terser({
  format: {
    // eslint-disable-next-line func-names
    comments: function (node, comment) {
      const text = comment.value;
      const type = comment.type;
      if (type == "comment2") {
        // multiline comment
        return /@preserve|@license|@cc_on/i.test(text);
      }
    },
  },
})

export default [
  {
    input: ['./main.js'],
    output: [
      {
        name: 'main',
        sourcemap: true,
        dir: './dist/',
        format: 'esm',
      },
    ],
    plugins: [
      terser({
        format: {
          // Remove all comments, including @license comments,
          // otherwise LHCI complains at us.
          comments: false,
        },
      })
    ],
  },
];
