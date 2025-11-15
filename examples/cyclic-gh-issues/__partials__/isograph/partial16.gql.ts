import { iso } from '../../__isograph/iso';
export const partial16Query = iso(`field Query.partial16Query {
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
export * from '../../__isograph/Query/partial16Query/resolver_reader';
iso(`entrypoint Query.partial16Query`);
export * from '../../__isograph/Query/partial16Query/entrypoint';