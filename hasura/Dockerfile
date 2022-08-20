FROM hasura/graphql-engine:v2.10.0.cli-migrations-v3

ARG DATABASE_URL
ARG LOG_TYPES

COPY ./hasura/migrations /hasura_migrations
COPY ./hasura/metadata /hasura_metadata

## postgres database to store Hasura metadata
ENV HASURA_GRAPHQL_METADATA_DATABASE_URL="${DATABASE_URL}"
## this env var can be used to add the above postgres database to Hasura as a data source. this can be removed/updated based on your needs
ENV PG_DATABASE_URL="${DATABASE_URL}"
## enable the console served by server
ENV HASURA_GRAPHQL_ENABLE_CONSOLE="true"
## enable debugging mode. It is recommended to disable this in production
ENV HASURA_GRAPHQL_DEV_MODE="true"
ENV HASURA_GRAPHQL_ENABLED_LOG_TYPES="${LOG_TYPES}"
## uncomment next line to set an admin secret
# ENV HASURA_GRAPHQL_ADMIN_SECRET="myadminsecretkey"
## auto-apply migrations and metadata
ENV HASURA_GRAPHQL_MIGRATIONS_DIR=/hasura_migrations
ENV HASURA_GRAPHQL_METADATA_DIR=/hasura_metadata

EXPOSE 8080