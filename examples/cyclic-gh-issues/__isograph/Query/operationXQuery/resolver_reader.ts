import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Query__operationXQuery__param } from './param_type';
import { Query__operationXQuery__output_type } from './output_type';
import { operationXQuery as resolver } from '../../../isographArtifact.graphql';
import Organization__operationXOrg__resolver_reader from '../../Organization/operationXOrg/resolver_reader';

const readerAst: ReaderAst<Query__operationXQuery__param> = [
  {
    kind: "Linked",
    fieldName: "organization",
    alias: null,
    arguments: [
      [
        "login",
        { kind: "String", value: "facebook" },
      ],
    ],
    condition: null,
    isUpdatable: false,
    refetchQueryIndex: null,
    selections: [
      {
        kind: "Resolver",
        alias: "operationXOrg",
        arguments: null,
        readerArtifact: Organization__operationXOrg__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Query__operationXQuery__param,
  Query__operationXQuery__output_type
> = {
  kind: "EagerReaderArtifact",
  fieldName: "Query.operationXQuery",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
