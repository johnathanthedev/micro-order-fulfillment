#!/bin/bash
# Source https://docs.docker.com/samples/rails/
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /zooth-api/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
