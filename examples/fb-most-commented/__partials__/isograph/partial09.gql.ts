import iso from '@iso';
export const partial09Query = iso(`field Query.partial09Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            createdAt
            title
            comments {
              totalCount
              __typename
            }
            __typename
            id
          }
          __typename
        }
        homepageUrl
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial09Query/resolver_reader';
iso(`entrypoint Query.partial09Query`);
export * from '../../__isograph/Query/partial09Query/entrypoint';