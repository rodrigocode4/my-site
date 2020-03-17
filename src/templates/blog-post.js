import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RecommendedPosts from '../components/RecommendedPosts';

import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const previous = pageContext.previousPost;
    const next = pageContext.nextPost;


    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <S.PostHeader>
                <S.PostDate>
                    {post.frontmatter.date} • {post.timeToRead} min de leitura
                </S.PostDate>
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.MainContent>
            <RecommendedPosts previous={previous} next={next}/>
        </Layout>
    )
}

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            }
            html
            timeToRead
        }
    }

`

export default BlogPost;