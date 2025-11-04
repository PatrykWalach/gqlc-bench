import iso from '@iso';
export const partial17Query = iso(`field Query.partial17Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            comments {
              totalCount
              __typename
            }
            title
            createdAt
            __typename
            id
          }
          __typename
        }
        createdAt
        homepageUrl
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial17Query/resolver_reader';
iso(`entrypoint Query.partial17Query`);
export * from '../../__isograph/Query/partial17Query/entrypoint';