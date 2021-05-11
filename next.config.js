module.exports= {
    images:{
        domains: ["www.google.co.uk", "assets.stickpng.com"],
    },
     webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}