import React from 'react';
import { graphql } from 'gatsby';
export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
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
        markdownRemark(id: { eq: $id } ) {
            html
        }
    }
`
;

