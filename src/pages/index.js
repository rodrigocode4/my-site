import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostItem from "../components/PostItem"

const IndexPage = () => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		query PostList {
			allMarkdownRemark {
				edges {
					node {
							frontmatter {
								background
								category
								date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
								title
								description
								color
							}
							timeToRead
					}
				}
			}
		}
	`)

	const PostList = allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Home" />
			{
				PostList.map(
					({ node: {
						frontmatter: {
							background,
							category,
							date,
							title,
							description,
							color
						},
						timeToRead
					},
					}) => (
							<PostItem
								slug="/about/"
								background={background}
								color={color}
								category={category}
								date={date}
								timeToRead={timeToRead}
								title={title}
								description={description}
							/>
						))
			}

		</Layout>
	)
}

export default IndexPage
