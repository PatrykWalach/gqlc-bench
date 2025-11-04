import { iso } from '../../__isograph/iso';
export const partial14Query = iso(`field Query.partial14Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
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
        createdAt
        homepageUrl
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial14Query/resolver_reader';
iso(`entrypoint Query.partial14Query`);
export * from '../../__isograph/Query/partial14Query/entrypoint';