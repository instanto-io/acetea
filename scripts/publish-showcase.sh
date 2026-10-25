#!/usr/bin/env bash
# Run from a clean checkout with JDK 21, registry access, Maven and gh installed.
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ -n "$(git status --porcelain)" ]]; then
  echo 'Commit changes before publishing so build-info.json identifies the exact source.' >&2
  exit 1
fi
source_commit=$(git rev-parse HEAD)
mvn --batch-mode --no-transfer-progress clean verify
site_dir="$PWD/acegwt-demo/target/site"
remote_url=$(git remote get-url origin)
publish_dir=$(mktemp -d)
trap 'rm -rf -- "$publish_dir"' EXIT
git -C "$publish_dir" init -q -b showcase
git -C "$publish_dir" remote add origin "$remote_url"
if git ls-remote --exit-code origin refs/heads/showcase >/dev/null 2>&1; then
  git -C "$publish_dir" fetch -q --depth=1 origin showcase
  git -C "$publish_dir" checkout -q -B showcase FETCH_HEAD
  git -C "$publish_dir" rm -q -r --ignore-unmatch .
fi
cp -R "$site_dir/." "$publish_dir/"
printf '{"sourceCommit":"%s","validation":"mvn clean verify; Chromium and WebKit"}\n' "$source_commit" > "$publish_dir/build-info.json"
touch "$publish_dir/.nojekyll"
git -C "$publish_dir" add .
git -C "$publish_dir" commit -q -m "Publish showcase from $source_commit"
git -C "$publish_dir" push -q origin showcase
gh workflow run publish-showcase.yml --ref main
echo 'Deployment dispatched: https://instanto-io.github.io/acetea/'
