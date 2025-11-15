import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Repository__operationXHomepage__param } from './param_type';
import { Repository__operationXHomepage__output_type } from './output_type';
import { operationXHomepage as resolver } from '../../../isographArtifact.graphql';

const readerAst: ReaderAst<Repository__operationXHomepage__param> = [
  {
    kind: "Scalar",
    fieldName: "homepageUrl",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
];

const artifact: EagerReaderArtifact<
  Repository__operationXHomepage__param,
  Repository__operationXHomepage__output_type
> = {
  kind: "EagerReaderArtifact",
  fieldName: "Repository.operationXHomepage",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
