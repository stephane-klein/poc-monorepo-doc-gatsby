import React from 'react';
import { graphql } from 'gatsby';
import SideBar from '../components/SideBar';

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { html } = markdownRemark;
    return (
        <div>
            <SideBar />
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
        }
    }
`;

