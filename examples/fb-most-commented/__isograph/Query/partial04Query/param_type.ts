
export type Query__partial04Query__param = {
  readonly data: {
    readonly organization: ({
      readonly repositories: {
        readonly nodes: (ReadonlyArray<({
          readonly issues: {
            readonly nodes: (ReadonlyArray<({
              readonly createdAt: string,
              readonly title: string,
              readonly __typename: 'Issue',
              readonly id: string,
              readonly comments: {
                readonly __typename: 'IssueCommentConnection',
              },
            } | null)> | null),
            readonly __typename: 'IssueConnection',
          },
          readonly __typename: 'Repository',
        } | null)> | null),
        readonly __typename: 'RepositoryConnection',
      },
      readonly __typename: 'Organization',
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
