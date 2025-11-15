import { iso } from '../../__isograph/iso';
export const partial22Query = iso(`field Query.partial22Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        homepageUrl
        createdAt
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
export * from '../../__isograph/Query/partial22Query/resolver_reader';
iso(`entrypoint Query.partial22Query`);
export * from '../../__isograph/Query/partial22Query/entrypoint';