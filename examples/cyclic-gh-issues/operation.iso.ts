import iso from '@iso';
iso(`entrypoint Query.operationXQuery`);
export const operationXQuery = iso(`field Query.operationXQuery {
  organization(login: "facebook") {
    operationXOrg
  }
}`)(({ data }) => data);
export const operationXOrg = iso(`field Organization.operationXOrg {
  __typename
  id
  repositories(first: 10) {
    __typename
    nodes {
      __typename
      id
      createdAt
      operationXHomepage
      issues(first: 10, states: null) {
        __typename
        nodes {
          __typename
          id
          createdAt
          title
          repository {
            __typename
            id
          }
        }
      }
    }
  }
}`)(({ data }) => data);
export const operationXHomepage = iso(`field Repository.operationXHomepage {
  homepageUrl
}`)(({ data }) => data);