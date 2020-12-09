const postQuery = `{
    posts: allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
    ) {
        edges {
            node {
                timeToRead
                objectID: id
                frontmatter {
                    background
                    category
                    date_timestemp: date
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    title
                    description
                }
                fields {
                    slug
                }
                excerpt(pruneLength: 5000)
             }
        }
    }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestemp: parseInt(
      (new Date(frontmatter.date_timestemp).getTime() / 1000).toFixed(0),
    ),
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
  },
]

module.exports = queries
