export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  variants: {},
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
