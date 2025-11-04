import { type Repository__fragmentRepository__output_type } from '../../Repository/fragmentRepository/output_type';

export type Query__fragmentOwnerQuery__param = {
  readonly data: {
    readonly organization: ({
      readonly repositories: {
        readonly nodes: (ReadonlyArray<({
          readonly fragmentRepository: Repository__fragmentRepository__output_type,
        } | null)> | null),
      },
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
