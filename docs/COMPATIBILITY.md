# Compatibility Notes

This package follows the public profile-bundle pattern used by community
DeepSeek Harness Web GUI themes:

- `package.json` declares `dsh.bundle.patch` and `dsh.client`.
- `cordis.patch.yml` inserts one unique bundle row.
- `lib/client.js` exports `inject = ['theme']` and `apply(ctx)`.
- The browser plugin uses `ctx.effect()` when available, and falls back to a
  direct activation path for easier local inspection.

The theme has not been verified inside a live Harness installation from this
workspace, because this environment does not include a running DeepSeek Harness
profile.
