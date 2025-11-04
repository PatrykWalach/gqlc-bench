import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Organization__operationXOrg__param } from './param_type';
import { Organization__operationXOrg__output_type } from './output_type';
import { operationXOrg as resolver } from '../../../isographArtifact.graphql';
import Repository__operationXHomepage__resolver_reader from '../../Repository/operationXHomepage/resolver_reader';

const readerAst: ReaderAst<Organization__operationXOrg__param> = [
  {
    kind: "Scalar",
    fieldName: "__typename",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "id",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Linked",
    fieldName: "repositories",
    alias: null,
    arguments: [
      [
        "first",
        { kind: "Literal", value: 10 },
      ],
    ],
    condition: null,
    isUpdatable: false,
    refetchQueryIndex: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "__typename",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Linked",
        fieldName: "nodes",
        alias: null,
        arguments: null,
        condition: null,
        isUpdatable: false,
        refetchQueryIndex: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "__typename",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "id",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "createdAt",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Resolver",
            alias: "operationXHomepage",
            arguments: null,
            readerArtifact: Repository__operationXHomepage__resolver_reader,
            usedRefetchQueries: [],
          },
          {
            kind: "Linked",
            fieldName: "issues",
            alias: null,
            arguments: [
              [
                "first",
                { kind: "Literal", value: 10 },
              ],

              [
                "states",
                { kind: "Literal", value: null },
              ],
            ],
            condition: null,
            isUpdatable: false,
            refetchQueryIndex: null,
            selections: [
              {
                kind: "Scalar",
                fieldName: "__typename",
                alias: null,
                arguments: null,
                isUpdatable: false,
              },
              {
                kind: "Linked",
                fieldName: "nodes",
                alias: null,
                arguments: null,
                condition: null,
                isUpdatable: false,
                refetchQueryIndex: null,
                selections: [
                  {
                    kind: "Scalar",
                    fieldName: "__typename",
                    alias: null,
                    arguments: null,
                    isUpdatable: false,
                  },
                  {
                    kind: "Scalar",
                    fieldName: "id",
                    alias: null,
                    arguments: null,
                    isUpdatable: false,
                  },
                  {
                    kind: "Scalar",
                    fieldName: "createdAt",
                    alias: null,
                    arguments: null,
                    isUpdatable: false,
                  },
                  {
                    kind: "Scalar",
                    fieldName: "title",
                    alias: null,
                    arguments: null,
                    isUpdatable: false,
                  },
                  {
                    kind: "Linked",
                    fieldName: "repository",
                    alias: null,
                    arguments: null,
                    condition: null,
                    isUpdatable: false,
                    refetchQueryIndex: null,
                    selections: [
                      {
                        kind: "Scalar",
                        fieldName: "__typename",
                        alias: null,
                        arguments: null,
                        isUpdatable: false,
                      },
                      {
                        kind: "Scalar",
                        fieldName: "id",
                        alias: null,
                        arguments: null,
                        isUpdatable: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const artifact: EagerReaderArtifact<
  Organization__operationXOrg__param,
  Organization__operationXOrg__output_type
> = {
  kind: "EagerReaderArtifact",
  fieldName: "Organization.operationXOrg",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
