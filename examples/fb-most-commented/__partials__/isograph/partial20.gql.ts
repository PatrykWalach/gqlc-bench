import iso from '@iso';
export const partial20Query = iso(`field Query.partial20Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        createdAt
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            comments {
              totalCount
              __typename
            }
            createdAt
            title
            __typename
            id
          }
          __typename
        }
        homepageUrl
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial20Query/resolver_reader';
iso(`entrypoint Query.partial20Query`);
export * from '../../__isograph/Query/partial20Query/entrypoint';