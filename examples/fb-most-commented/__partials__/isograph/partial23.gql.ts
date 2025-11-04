import iso from '@iso';
export const partial23Query = iso(`field Query.partial23Query {
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
export * from '../../__isograph/Query/partial23Query/resolver_reader';
iso(`entrypoint Query.partial23Query`);
export * from '../../__isograph/Query/partial23Query/entrypoint';