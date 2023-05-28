#!/bin/sh
set -e

# Create the database
mix ecto.create

mix ecto.migrate

mix deps.get
