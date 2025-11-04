import iso from '@iso';
export const partial07Query = iso(`field Query.partial07Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            comments {
              totalCount
              __typename
            }
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
export * from '../../__isograph/Query/partial07Query/resolver_reader';
iso(`entrypoint Query.partial07Query`);
export * from '../../__isograph/Query/partial07Query/entrypoint';