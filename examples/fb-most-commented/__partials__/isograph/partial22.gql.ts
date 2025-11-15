import { iso } from '../../__isograph/iso';
export const partial22Query = iso(`field Query.partial22Query {
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
        homepageUrl
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial22Query/resolver_reader';
iso(`entrypoint Query.partial22Query`);
export * from '../../__isograph/Query/partial22Query/entrypoint';