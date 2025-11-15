
export type Query__partial13Query__param = {
  readonly data: {
    readonly organization: ({
      readonly repositories: {
        readonly nodes: (ReadonlyArray<({
          readonly createdAt: string,
          readonly issues: {
            readonly nodes: (ReadonlyArray<({
              readonly title: string,
              readonly createdAt: string,
              readonly __typename: 'Issue',
              readonly id: string,
              readonly repository: {
                readonly __typename: 'Repository',
                readonly id: string,
              },
            } | null)> | null),
            readonly __typename: 'IssueConnection',
          },
          readonly homepageUrl: (string | null),
          readonly __typename: 'Repository',
          readonly id: string,
        } | null)> | null),
        readonly __typename: 'RepositoryConnection',
      },
      readonly __typename: 'Organization',
      readonly id: string,
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
