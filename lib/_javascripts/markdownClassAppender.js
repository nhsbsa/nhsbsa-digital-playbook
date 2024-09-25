function appendRuleNames(
  md,
  tokens = [],
  appendRules = true,
  excludePatterns = [],
) {
  let ruleNames = Array.from(tokens);
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

module.exports = (md, options = {}) => {
  const {
    tokens = [],
    appendRules = true,
    cssClass = 'md',
    excludePatterns = [],
  } = options;

  let ruleNames = appendRuleNames(md, tokens, appendRules, excludePatterns);

  console.log(`configuring CSS class appender for [${ruleNames}]`);
  for (let ruleName of ruleNames) {
    decorate(md, ruleName, cssClass);
  }
};
