#!/usr/bin/env bash

set -e

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",\t ]//g')

SENTRY_VERSION="ember-sentry-${PACKAGE_VERSION}"

echo "Push version bumping in package.json on branch master"
git push origin master
echo "Commit pushed on GitHub ✅\n"

echo "Push code on Scalingo"
git push scalingo master
echo "Commit pushed on Scalingo ✅\n"

echo "Publish tag"
git push --tags
echo "Tag published ✅\n"

echo "Deploy the release on Sentry"
sentry-cli releases -o pix -p ember-sentry new ${SENTRY_VERSION} --finalize
sentry-cli releases -o pix set-commits --auto ${SENTRY_VERSION}
sentry-cli releases -o pix deploys ${SENTRY_VERSION} new -e production
echo "Sentry release deployed ✅\n"
