import iso from '@iso';
export const partial21Query = iso(`field Query.partial21Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            createdAt
            comments {
              totalCount
              __typename
            }
            title
            __typename
            id
          }
          __typename
        }
        homepageUrl
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial21Query/resolver_reader';
iso(`entrypoint Query.partial21Query`);
export * from '../../__isograph/Query/partial21Query/entrypoint';