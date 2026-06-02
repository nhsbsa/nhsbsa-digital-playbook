module.exports = {
  // 'git Last Modified' spawns a git subprocess per template (~150ms each).
  // In dev, use the fast filesystem mtime instead.
  date:
    process.env.NODE_ENV === 'production'
      ? 'git Last Modified'
      : 'Last Modified',
};
