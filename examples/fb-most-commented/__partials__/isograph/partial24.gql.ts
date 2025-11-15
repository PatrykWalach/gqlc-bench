import { iso } from '../../__isograph/iso';
export const partial24Query = iso(`field Query.partial24Query {
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
        homepageUrl
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial24Query/resolver_reader';
iso(`entrypoint Query.partial24Query`);
export * from '../../__isograph/Query/partial24Query/entrypoint';