import iso from '@iso';
export const partial03Query = iso(`field Query.partial03Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        createdAt
        issues(first: 10, states: null) {
          nodes {
            createdAt
            __typename
            id
            repository {
              __typename
              id
            }
          }
          __typename
        }
        __typename
        id
      }
      __typename
    }
    __typename
    id
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial03Query/resolver_reader';
iso(`entrypoint Query.partial03Query`);
export * from '../../__isograph/Query/partial03Query/entrypoint';