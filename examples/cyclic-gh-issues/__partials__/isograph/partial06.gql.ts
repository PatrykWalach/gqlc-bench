import { iso } from '../../__isograph/iso';
export const partial06Query = iso(`field Query.partial06Query {
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
export * from '../../__isograph/Query/partial06Query/resolver_reader';
iso(`entrypoint Query.partial06Query`);
export * from '../../__isograph/Query/partial06Query/entrypoint';