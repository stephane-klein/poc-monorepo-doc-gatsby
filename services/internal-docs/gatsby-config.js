module.exports = {
    siteMetadata: {
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'MyCompany Internal Docs',
                start_url: '/',
                background_color: 'white',
                theme_color: 'black',
                display: 'standalone'
            }
        }
    ]
};
