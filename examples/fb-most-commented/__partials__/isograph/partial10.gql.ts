import { iso } from '../../__isograph/iso';
export const partial10Query = iso(`field Query.partial10Query {
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
export * from '../../__isograph/Query/partial10Query/resolver_reader';
iso(`entrypoint Query.partial10Query`);
export * from '../../__isograph/Query/partial10Query/entrypoint';