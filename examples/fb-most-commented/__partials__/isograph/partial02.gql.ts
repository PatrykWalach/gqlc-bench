import iso from '@iso';
export const partial02Query = iso(`field Query.partial02Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        homepageUrl
        __typename
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          __typename
          nodes {
            __typename
            id
            comments {
              __typename
            }
          }
        }
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial02Query/resolver_reader';
iso(`entrypoint Query.partial02Query`);
export * from '../../__isograph/Query/partial02Query/entrypoint';