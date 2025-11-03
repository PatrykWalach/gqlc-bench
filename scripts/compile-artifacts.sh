#!/usr/bin/env bash

# find dirs in examples dir and save them
DIRECTORIES=$(find ./examples -type d -maxdepth 1 -not -path './examples')

# create partial artifacts
node ./src/node_scripts/generatePartial.js

# loop through example dirs and run compiler for each
for DIRECTORY in $DIRECTORIES; do
  # make temp artifacts dir
  mkdir $DIRECTORY/__artifacts__
  # compile artifacts
  yarn relay $DIRECTORY/relay.config.json
  
  # remove raw query, move generated root artifact and rename
  rm $DIRECTORY/operation.gql.ts
  # find operation artefacts names and move them
  OPERATION=$(find $DIRECTORY/__artifacts__/ -name 'operation*Query.graphql.ts' -maxdepth 1 | head -n 1)
  if [[ ! -z "$OPERATION" ]]; then
    mv $DIRECTORY/__artifacts__/${OPERATION##*/} $DIRECTORY/relayArtifact.graphql.ts
  fi
  # TODO: Find out if we actually need these remaining artifacts, or they can be deleted
  # remove remaining fragment artifacts that we don't need
  rm $DIRECTORY/__artifacts__/operation*.graphql.ts

  # remove raw fragment, move generated fragment and rename
  rm $DIRECTORY/fragment.gql.ts
  # find fragment artefacts names and move them
  FRAGMENTOWNER=$(find $DIRECTORY/__artifacts__/ -name 'fragmentOwner*Query.graphql.ts' -maxdepth 1 | head -n 1)
  if [[ ! -z "$FRAGMENTOWNER" ]]; then
    mv $DIRECTORY/__artifacts__/${FRAGMENTOWNER##*/} $DIRECTORY/fragmentOwner_relayArtifact.graphql.ts
  fi
  FRAGMENT=$(find $DIRECTORY/__artifacts__/ -name 'fragment*.graphql.ts' -maxdepth 1 | head -n 1)
  if [[ ! -z "$FRAGMENT" ]]; then
    mv $DIRECTORY/__artifacts__/${FRAGMENT##*/} $DIRECTORY/fragment_relayArtifact.graphql.ts
  fi

  # remove all temp versions of partial relay artifacts and replace them with the compiled ones
  rm -rf $DIRECTORY/__partials__/relay/*
  mv $DIRECTORY/__artifacts__/* $DIRECTORY/__partials__/relay/
  # remove temp folder
  rm -rf $DIRECTORY/__artifacts__
done


# loop through example dirs and run compiler for each
for DIRECTORY in $DIRECTORIES; do
  # compile artifacts
  yarn isograph --config $DIRECTORY/isograph.config.json
  
  # remove raw query, move generated root artifact and rename
  rm $DIRECTORY/operation.iso.ts
  # find operation artefacts names and move them
  OPERATION=$(find $DIRECTORY/__isograph/ -name 'operation*Query.graphql.ts' -maxdepth 1 | head -n 1)
  if [[ ! -z "$OPERATION" ]]; then
    mv $DIRECTORY/__isograph/${OPERATION##*/} $DIRECTORY/isographArtifact.graphql.ts
  fi
  # TODO: Find out if we actually need these remaining artifacts, or they can be deleted
  # remove remaining fragment artifacts that we don't need
  rm $DIRECTORY/__isograph/operation*.graphql.ts

  # remove raw fragment, move generated fragment and rename
  rm $DIRECTORY/fragment.iso.ts
  # find fragment artefacts names and move them
  FRAGMENTOWNER=$(find $DIRECTORY/__isograph/ -name 'fragmentOwner*Query.graphql.ts' -maxdepth 1 | head -n 1)
  if [[ ! -z "$FRAGMENTOWNER" ]]; then
    mv $DIRECTORY/__isograph/${FRAGMENTOWNER##*/} $DIRECTORY/fragmentOwner_isographArtifact.graphql.ts
  fi
  FRAGMENT=$(find $DIRECTORY/__isograph/ -name 'fragment*.graphql.ts' -maxdepth 1 | head -n 1)
  if [[ ! -z "$FRAGMENT" ]]; then
    mv $DIRECTORY/__isograph/${FRAGMENT##*/} $DIRECTORY/fragment_isographArtifact.graphql.ts
  fi

  # remove all temp versions of partial isograph artifacts and replace them with the compiled ones
  rm -rf $DIRECTORY/__partials__/isograph/*
  mv $DIRECTORY/__isograph/* $DIRECTORY/__partials__/isograph/
  # remove temp folder
  rm -rf $DIRECTORY/__isograph
done