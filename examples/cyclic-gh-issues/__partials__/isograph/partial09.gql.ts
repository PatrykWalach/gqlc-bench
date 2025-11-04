import iso from '@iso';
export const partial09Query = iso(`field Query.partial09Query {
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
export * from '../../__isograph/Query/partial09Query/resolver_reader';
iso(`entrypoint Query.partial09Query`);
export * from '../../__isograph/Query/partial09Query/entrypoint';