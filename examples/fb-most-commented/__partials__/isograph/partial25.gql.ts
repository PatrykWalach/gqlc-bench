import iso from '@iso';
export const partial25Query = iso(`field Query.partial25Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            createdAt
            title
            comments {
              totalCount
              __typename
            }
            __typename
            id
          }
          __typename
        }
        createdAt
        homepageUrl
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial25Query/resolver_reader';
iso(`entrypoint Query.partial25Query`);
export * from '../../__isograph/Query/partial25Query/entrypoint';