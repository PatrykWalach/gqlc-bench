import iso from '@iso';
export const partial12Query = iso(`field Query.partial12Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        homepageUrl
        createdAt
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            title
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
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial12Query/resolver_reader';
iso(`entrypoint Query.partial12Query`);
export * from '../../__isograph/Query/partial12Query/entrypoint';