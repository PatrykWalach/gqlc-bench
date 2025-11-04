import iso from '@iso';
export const partial06Query = iso(`field Query.partial06Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        homepageUrl
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
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
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial06Query/resolver_reader';
iso(`entrypoint Query.partial06Query`);
export * from '../../__isograph/Query/partial06Query/entrypoint';