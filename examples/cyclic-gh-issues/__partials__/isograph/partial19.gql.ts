import iso from '@iso';
export const partial19Query = iso(`field Query.partial19Query {
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
export * from '../../__isograph/Query/partial19Query/resolver_reader';
iso(`entrypoint Query.partial19Query`);
export * from '../../__isograph/Query/partial19Query/entrypoint';