import { iso } from '../../__isograph/iso';
export const partial04Query = iso(`field Query.partial04Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        createdAt
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
        __typename
        id
      }
      __typename
    }
    __typename
    id
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial04Query/resolver_reader';
iso(`entrypoint Query.partial04Query`);
export * from '../../__isograph/Query/partial04Query/entrypoint';