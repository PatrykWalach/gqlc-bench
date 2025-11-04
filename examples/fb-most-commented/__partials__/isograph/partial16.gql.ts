import iso from '@iso';
export const partial16Query = iso(`field Query.partial16Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            createdAt
            comments {
              totalCount
              __typename
            }
            title
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
export * from '../../__isograph/Query/partial16Query/resolver_reader';
iso(`entrypoint Query.partial16Query`);
export * from '../../__isograph/Query/partial16Query/entrypoint';