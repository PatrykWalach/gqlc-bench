import iso from '@iso';
export const partial24Query = iso(`field Query.partial24Query {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
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
export * from '../../__isograph/Query/partial24Query/resolver_reader';
iso(`entrypoint Query.partial24Query`);
export * from '../../__isograph/Query/partial24Query/entrypoint';