import { iso } from '../../__isograph/iso';
export const partial18Query = iso(`field Query.partial18Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        createdAt
        homepageUrl
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
        __typename
        id
      }
      __typename
    }
    __typename
    id
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial18Query/resolver_reader';
iso(`entrypoint Query.partial18Query`);
export * from '../../__isograph/Query/partial18Query/entrypoint';