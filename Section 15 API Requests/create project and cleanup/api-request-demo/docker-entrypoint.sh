#!/bin/sh
set -e
if [ ! -d node_modules/vite ]; then
  echo "[docker] Installing dependencies (npm ci)..."
  npm ci
fi
exec npm run dev -- --host 0.0.0.0
