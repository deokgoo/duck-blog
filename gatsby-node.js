const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const categories = (await graphql(
    `query categoryListQuery {
      allMdx {
        distinct(field: frontmatter___category)
      }
    }`
  )).data.allMdx.distinct;

  const categoryList = (category) => graphql(
    `query categoryListQuery {
      allMdx(
        filter: {
          frontmatter: {
            category: {
              eq: "${category}"
            },
            title: {
              regex: "/^((?!WIP).)*$/"
            }
          }
        }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }`
  );

  const categoryAll = (await graphql(
    `query categoryAllQuery {
      allMdx(
        filter: {
          frontmatter: {
            title: {
              regex: "/^((?!WIP).)*$/"
            }
          }
        }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }`
  )).data.allMdx.edges;

  const postsPerPage = 5;

  {
    const maxPage = Math.ceil(categoryAll.length / postsPerPage);

    Array.from({length: maxPage}).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/main/index.tsx"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          maxPage,
          currentPage: i + 1,
        },
      })
    });
  }

  for(let i=0;i<categories.length;i++) {
    let categoryLength = (await categoryList(categories[i])).data.allMdx.edges.length;
    let maxPage = Math.ceil(categoryLength / postsPerPage);

    Array.from({ length: categoryLength }).forEach((_, j) => {
      createPage({
        path: j === 0 ? `/category/${categories[i]}` : `/category/${categories[i]}/${j + 1}`,
        component: path.resolve("./src/templates/category/index.tsx"),
        context: {
          limit: postsPerPage,
          skip: j * postsPerPage,
          category: categories[i],
          maxPage,
          currentPage: j + 1,
        },
      });
    });
  }
}
