import React from 'react';
import { graphql } from 'gatsby';
export default function Template({ data }) {
    console.log(data);
    const { markdownRemark } = data;
    const { html } = markdownRemark;
    return (
        <div>
            <div
                className='blog-post-content'
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark: markdownRemark(id: { eq: $id } ) {
            html
        },
        allPages: allMarkdownRemark {
            edges {
                node {
                    id
                    parent {
                        id
                        ... on File {
                            id
                            name
                            root
                            relativePath
                            relativeDirectory
                        }
                    }
                }
            }
        }
    }
`;

