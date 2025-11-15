import { iso } from '../../__isograph/iso';
export const partial15Query = iso(`field Query.partial15Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        issues(first: 10, states: null) {
          nodes {
            title
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
export * from '../../__isograph/Query/partial15Query/resolver_reader';
iso(`entrypoint Query.partial15Query`);
export * from '../../__isograph/Query/partial15Query/entrypoint';