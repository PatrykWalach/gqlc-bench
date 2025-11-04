import { type Repository__operationXHomepage__output_type } from '../../Repository/operationXHomepage/output_type';

export type Organization__operationXOrg__param = {
  readonly data: {
    readonly __typename: 'Organization',
    readonly id: string,
    readonly repositories: {
      readonly __typename: 'RepositoryConnection',
      readonly nodes: (ReadonlyArray<({
        readonly __typename: 'Repository',
        readonly id: string,
        readonly createdAt: string,
        readonly operationXHomepage: Repository__operationXHomepage__output_type,
        readonly issues: {
          readonly __typename: 'IssueConnection',
          readonly nodes: (ReadonlyArray<({
            readonly __typename: 'Issue',
            readonly id: string,
            readonly createdAt: string,
            readonly title: string,
            readonly repository: {
              readonly __typename: 'Repository',
              readonly id: string,
            },
          } | null)> | null),
        },
      } | null)> | null),
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
