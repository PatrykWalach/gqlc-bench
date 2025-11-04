import { iso } from '../../__isograph/iso';
export const partial01Query = iso(`field Query.partial01Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        issues(first: 10, states: null) {
          nodes {
            title
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
export * from '../../__isograph/Query/partial01Query/resolver_reader';
iso(`entrypoint Query.partial01Query`);
export * from '../../__isograph/Query/partial01Query/entrypoint';