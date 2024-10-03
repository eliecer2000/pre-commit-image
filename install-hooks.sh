#!/bin/sh

# Check if the repository is initialized with Git
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This directory is not a Git repository. Initialize a repository with 'git init'."
  exit 1
fi
# Check if the pre-commit hook already exists
HOOK_FILE=".git/hooks/pre-commit"
# Install the pre-commit hook
echo "Installing the pre-commit hook..."
echo '
#!/usr/bin/env bash
ARGS=(hook-impl --config=/etc/pre-commit-config.yaml --hook-type=pre-commit --color=always)
ARGS+=(--hook-dir "$(pwd)" -- "$@")
exec docker run --rm -v "$(pwd)":/app -w /app eliecer2000/pre-commit-image:latest "${ARGS[@]}"
' >"$HOOK_FILE"
# Give execution permissions to the hook
chmod +x "$HOOK_FILE"
echo "The pre-commit hook has been successfully installed."
HOOK_FILE=".git/hooks/commit-msg"
# Install the commit-msg hook
echo "Installing the commit-msg hook..."
echo '
#!/usr/bin/env bash
ARGS=(hook-impl --config=/etc/pre-commit-config.yaml --hook-type=commit-msg --color=always)
ARGS+=(--hook-dir "$(pwd)" -- "$@")
exec docker run --rm -v "$(pwd)":/app -w /app eliecer2000/pre-commit-image:latest "${ARGS[@]}"
' >"$HOOK_FILE"
# Give execution permissions to the hook
chmod +x "$HOOK_FILE"
echo "The commit-msg hook has been successfully installed."
docker run --name temp-container -d eliecer2000/pre-commit-image:latest tail -f /dev/null
docker cp temp-container:/app/commitlint.config.js ./commitlint.config.js
docker rm -f temp-container
