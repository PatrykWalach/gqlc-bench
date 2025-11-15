import { iso } from './__isograph/iso';
export const fragmentOwnerQuery = iso(`field Query.fragmentOwnerQuery {
  organization(login: "facebook") {
    repositories(first: 10) {
      nodes {
        fragmentRepository
      }
    }
  }
}`)(({ data }) => data);
export * from './__isograph/Query/fragmentOwnerQuery/resolver_reader';
iso(`entrypoint Query.fragmentOwnerQuery`);
export * from './__isograph/Query/fragmentOwnerQuery/entrypoint';