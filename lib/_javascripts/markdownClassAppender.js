function appendRuleNames(
  md,
  excludeTokens = [],
  appendRules = true,
  excludePatterns = [],
) {
  let ruleNames = Array.from(excludeTokens);
  if (appendRules) {
    Object.keys(md.renderer.rules)
      .filter(
        (ruleName) =>
          !ruleNames.includes(ruleName) &&
          !excludePatterns.some((pattern) =>
            typeof pattern === 'string'
              ? ruleName.includes(pattern)
              : pattern.test(ruleName),
          ),
      )
      .forEach((ruleName) => ruleNames.push(ruleName));
  }
  return ruleNames;
}

function decorate(md, ruleName, cssClass) {
  // Remember the old renderer if overridden, or proxy to the default renderer.
  let defaultRender =
    md.renderer.rules[ruleName] ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules[ruleName] = function (tokens, idx, options, env, self) {
    // Add a new `target` attribute, or replace the value of the existing one.
    tokens[idx].attrJoin('class', cssClass);

    // Pass the token to the default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };
}

export default (md, options = {}) => {
  const {
    excludeTokens = [],
    appendRules = true,
    cssClass = 'md',
    excludePatterns = [],
  } = options;

  let ruleNames = appendRuleNames(
    md,
    excludeTokens,
    appendRules,
    excludePatterns,
  );

  console.log(`configuring CSS class appender for [${ruleNames}]`);
  for (let ruleName of ruleNames) {
    decorate(md, ruleName, cssClass);
  }
};
