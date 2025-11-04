import iso from '@iso';
export const partial08Query = iso(`field Query.partial08Query {
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
        homepageUrl
        createdAt
        __typename
        id
      }
      __typename
    }
    __typename
    id
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial08Query/resolver_reader';
iso(`entrypoint Query.partial08Query`);
export * from '../../__isograph/Query/partial08Query/entrypoint';