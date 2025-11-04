import iso from '@iso';
export const partial12Query = iso(`field Query.partial12Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        createdAt
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
export * from '../../__isograph/Query/partial12Query/resolver_reader';
iso(`entrypoint Query.partial12Query`);
export * from '../../__isograph/Query/partial12Query/entrypoint';