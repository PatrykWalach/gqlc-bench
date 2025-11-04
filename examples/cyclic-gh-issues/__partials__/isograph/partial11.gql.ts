import iso from '@iso';
export const partial11Query = iso(`field Query.partial11Query {
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
export * from '../../__isograph/Query/partial11Query/resolver_reader';
iso(`entrypoint Query.partial11Query`);
export * from '../../__isograph/Query/partial11Query/entrypoint';