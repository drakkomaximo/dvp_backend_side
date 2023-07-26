#!/bin/bash

# Esperar hasta que el servidor de MySQL esté activo
until mysqladmin ping -h"$1" -u"$MYSQLDB_ROOT_USER" -p"$MYSQLDB_ROOT_PASSWORD" -P"$MYSQLDB_LOCAL_PORT"; do
  echo "Waiting for the MySQL server to be active..."
  sleep 1
done

echo "The MySQL server is ready to accept connections."

# Ejecutar el comando proporcionado como argumento (por ejemplo, npm start)
exec "${@:2}"
