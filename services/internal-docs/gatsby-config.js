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
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown-pages',
                path: `/Users/stephane/Work/github.com/stephane-klein/poc-monorepo-doc-gatsby/`,
                ignore: ['**/internal-docs/**']
            }
        },
        'gatsby-transformer-remark'
    ]
};
