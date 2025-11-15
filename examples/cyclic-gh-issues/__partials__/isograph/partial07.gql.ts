import { iso } from '../../__isograph/iso';
export const partial07Query = iso(`field Query.partial07Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        createdAt
        homepageUrl
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
export * from '../../__isograph/Query/partial07Query/resolver_reader';
iso(`entrypoint Query.partial07Query`);
export * from '../../__isograph/Query/partial07Query/entrypoint';