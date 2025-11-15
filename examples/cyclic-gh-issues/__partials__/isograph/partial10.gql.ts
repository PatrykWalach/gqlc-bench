import { iso } from '../../__isograph/iso';
export const partial10Query = iso(`field Query.partial10Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
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
        createdAt
        homepageUrl
        __typename
        id
      }
      __typename
    }
    __typename
    id
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial10Query/resolver_reader';
iso(`entrypoint Query.partial10Query`);
export * from '../../__isograph/Query/partial10Query/entrypoint';