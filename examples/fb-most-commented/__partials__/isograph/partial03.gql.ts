import iso from '@iso';
export const partial03Query = iso(`field Query.partial03Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        createdAt
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            title
            __typename
            id
            comments {
              __typename
            }
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial03Query/resolver_reader';
iso(`entrypoint Query.partial03Query`);
export * from '../../__isograph/Query/partial03Query/entrypoint';