import { iso } from '../../__isograph/iso';
export const partial08Query = iso(`field Query.partial08Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            createdAt
            title
            __typename
            id
            comments {
              __typename
            }
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
export * from '../../__isograph/Query/partial08Query/resolver_reader';
iso(`entrypoint Query.partial08Query`);
export * from '../../__isograph/Query/partial08Query/entrypoint';