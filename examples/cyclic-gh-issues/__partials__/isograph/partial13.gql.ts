import { iso } from '../../__isograph/iso';
export const partial13Query = iso(`field Query.partial13Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
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
export * from '../../__isograph/Query/partial13Query/resolver_reader';
iso(`entrypoint Query.partial13Query`);
export * from '../../__isograph/Query/partial13Query/entrypoint';