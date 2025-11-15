import { type Organization__operationXOrg__output_type } from '../../Organization/operationXOrg/output_type';

export type Query__operationXQuery__param = {
  readonly data: {
    readonly organization: ({
      readonly operationXOrg: Organization__operationXOrg__output_type,
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
