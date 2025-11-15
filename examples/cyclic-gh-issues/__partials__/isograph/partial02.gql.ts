import { iso } from '../../__isograph/iso';
export const partial02Query = iso(`field Query.partial02Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
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
        createdAt
        __typename
        id
      }
      __typename
    }
    __typename
    id
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial02Query/resolver_reader';
iso(`entrypoint Query.partial02Query`);
export * from '../../__isograph/Query/partial02Query/entrypoint';