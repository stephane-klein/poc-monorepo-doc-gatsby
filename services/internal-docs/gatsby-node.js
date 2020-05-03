const path = require('path');
exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const PageTemplate = path.resolve('src/templates/PageTemplate.js');
    const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            id
            parent {
                id
                ... on File {
                    id
                    name
                    dir
                    publicURL
                    root
                    relativePath
                    relativeDirectory
                }
            }
          }
        }
      }
    }
  `);
    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.');
        return;
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        let path;
        if (node.parent.name == 'README') {
            path = `${node.parent.relativeDirectory}/`;
        } else {
            path = `${node.parent.relativeDirectory}/${node.parent.name}/`
        }
        createPage({
            path: path,
            component: PageTemplate,
            context: {
                id: node.id
            }
        });
    });
};
