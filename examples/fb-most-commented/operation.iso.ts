import iso from '@iso';
iso(`entrypoint Query.operationQuery`);
export const operationQuery = iso(`field Query.operationQuery {
  organization(login: "facebook") {
    __typename
    repositories(first: 50) {
      __typename
      nodes {
        __typename
        createdAt
        homepageUrl
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          __typename
          nodes {
            __typename
            createdAt
            id
            title
            comments {
              __typename
              totalCount
            }
          }
        }
      }
    }
  }
}`)(({ data }) => data);