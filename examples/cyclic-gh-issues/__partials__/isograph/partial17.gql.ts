import { iso } from '../../__isograph/iso';
export const partial17Query = iso(`field Query.partial17Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        homepageUrl
        createdAt
        issues(first: 10, states: null) {
          nodes {
            createdAt
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
export * from '../../__isograph/Query/partial17Query/resolver_reader';
iso(`entrypoint Query.partial17Query`);
export * from '../../__isograph/Query/partial17Query/entrypoint';