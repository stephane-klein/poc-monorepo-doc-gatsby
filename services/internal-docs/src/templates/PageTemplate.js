import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { html } = markdownRemark;
    return (
        <Layout>
            <div
                className='blog-post-content'
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Layout>
    );
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark: markdownRemark(id: { eq: $id } ) {
            html
        }
    }
`;

