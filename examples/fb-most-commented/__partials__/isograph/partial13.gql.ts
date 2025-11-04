import { iso } from '../../__isograph/iso';
export const partial13Query = iso(`field Query.partial13Query {
  organization(login: "facebook") {
    repositories(first: 50) {
      nodes {
        issues(first: 50, states: null, orderBy: {field: null, direction: null}) {
          nodes {
            createdAt
            title
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
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
}`)(({ data }) => data);
export * from '../../__isograph/Query/partial13Query/resolver_reader';
iso(`entrypoint Query.partial13Query`);
export * from '../../__isograph/Query/partial13Query/entrypoint';