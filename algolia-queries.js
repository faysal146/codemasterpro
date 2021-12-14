const indexName = `courses`;

const pageQuery = `
query CoursesQuery {
  allFile(
    filter: {sourceInstanceName: {eq: "courses"}, ext: {eq: ".mdx"}}
    sort: {fields: childrenMdx___frontmatter___createdAt, order: DESC}
    limit: 100
  ) {
    edges {
      node {
        id
        slug: name
        childMdx {
          frontmatter {
            tags
            title
            categories {
              name
              routerPath
            }
            keywords
            description
            createdAt(formatString: "MMMM Do YYYY")
            updatedAt(formatString: "MMMM Do YYYY")
            featured
            image {
              childImageSharp {
                gatsbyImageData(height: 70, quality: 80, width: 70, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
}
`;

function pageToAlgoliaRecord({ node: { id, childMdx, ...rest } }) {
    return {
        objectID: id,
        ...childMdx.frontmatter,
        ...rest
    };
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.allFile.edges.map(pageToAlgoliaRecord),
        indexName,
        settings: { attributesToSnippet: [`description:20`] }
    }
];

module.exports = queries;
