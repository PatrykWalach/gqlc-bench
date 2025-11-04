
export type Query__partial02Query__param = {
  readonly data: {
    readonly organization: ({
      readonly repositories: {
        readonly nodes: (ReadonlyArray<({
          readonly homepageUrl: (string | null),
          readonly __typename: 'Repository',
          readonly issues: {
            readonly __typename: 'IssueConnection',
            readonly nodes: (ReadonlyArray<({
              readonly __typename: 'Issue',
              readonly id: string,
              readonly comments: {
                readonly __typename: 'IssueCommentConnection',
              },
            } | null)> | null),
          },
        } | null)> | null),
        readonly __typename: 'RepositoryConnection',
      },
      readonly __typename: 'Organization',
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
