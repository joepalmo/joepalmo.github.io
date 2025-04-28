import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      // default options
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    // paths: {
    //   base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
    // },
    paths: {
      base: ''
    },    
    prerender: {
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        if (status === 404) {
          return {
            ignore: true
          };
        }
        return {
          fail: true
        };
      }
    }
  }
};

export default config;
