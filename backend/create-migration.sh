#!/bin/bash
MIGRATION_NAME=$1

yarn run typeorm:generate-migration ./libs/database/src/migrations/"$MIGRATION_NAME"