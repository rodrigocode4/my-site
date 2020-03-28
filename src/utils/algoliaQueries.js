const postsQuery = `{
    posts: allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
    ) {
        edges {
            node {
                    objectID: id
                    frontmatter {
                        background
                        category
                        date_timestemp: date
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

const flatten = arr => arr.map(({ node: { frontmatter, ...rest }}) => ({
    ...frontmatter,
    date_timestemp: parseInt(
        (new Date(frontmatter.date_timestemp).getTime() / 1000).toFixed(0)
    ),
    ...rest
}))

const queries = [
    {
      query: postsQuery,
      transformer: ({ data }) => flatten(data.posts.edges), // optional
      indexName: 'Posts',
      settings: {
        attributesToSnippets: ['excerpt:20']
      }
    },
];

module.exports = queries