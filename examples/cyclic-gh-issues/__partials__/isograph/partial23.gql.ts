import { iso } from '../../__isograph/iso';
export const partial23Query = iso(`field Query.partial23Query {
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
export * from '../../__isograph/Query/partial23Query/resolver_reader';
iso(`entrypoint Query.partial23Query`);
export * from '../../__isograph/Query/partial23Query/entrypoint';