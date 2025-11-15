import { iso } from '../../__isograph/iso';
export const partial05Query = iso(`field Query.partial05Query {
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
        homepageUrl
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
export * from '../../__isograph/Query/partial05Query/resolver_reader';
iso(`entrypoint Query.partial05Query`);
export * from '../../__isograph/Query/partial05Query/entrypoint';