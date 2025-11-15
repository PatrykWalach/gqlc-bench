import { iso } from '../../__isograph/iso';
export const partial15Query = iso(`field Query.partial15Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        createdAt
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            title
            createdAt
            comments {
              totalCount
              __typename
            }
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
export * from '../../__isograph/Query/partial15Query/resolver_reader';
iso(`entrypoint Query.partial15Query`);
export * from '../../__isograph/Query/partial15Query/entrypoint';