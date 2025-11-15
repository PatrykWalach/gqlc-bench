import { iso } from '../../__isograph/iso';
export const partial25Query = iso(`field Query.partial25Query {
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
export * from '../../__isograph/Query/partial25Query/resolver_reader';
iso(`entrypoint Query.partial25Query`);
export * from '../../__isograph/Query/partial25Query/entrypoint';