module.exports = {
    env: {
        mongodburl: "mongodb://localhost:27017/fakeDB",
    },
    images: {
        loader: 'akamai',
        path: '',
        },
        basePath: process.env.NEXT_PUBLIC_BASE_PATH,
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
      
};