#!/bin/bash
set -e

echo "Creating Lankaspot databases and roles..."

psql -v ON_ERROR_STOP=1 \
  --username "$POSTGRES_USER" \
  --dbname "$POSTGRES_DB" <<-EOSQL

    CREATE ROLE lankaspot
        LOGIN
        PASSWORD '${LANKASPOT_DB_PASSWORD}';

    CREATE ROLE keycloak
        LOGIN
        PASSWORD '${KEYCLOAK_DB_PASSWORD}';

    CREATE DATABASE lankaspot
        OWNER lankaspot;

    CREATE DATABASE keycloak
        OWNER keycloak;

EOSQL

echo "PostgreSQL initialization completed."