const markdown = require('markdown-it');

function decorate(md, ruleName, cssClass) {

    // Remember the old renderer if overridden, or proxy to the default renderer.
    let defaultRender = md.renderer.rules[ruleName] || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
  
    md.renderer.rules[ruleName] = function (tokens, idx, options, env, self) {
        // Add a new `target` attribute, or replace the value of the existing one.
        tokens[idx].attrJoin('class', cssClass);

        // console.log(`Adding CSS class "${cssClass}" for ${ruleName}`);
    
        // Pass the token to the default renderer.
        return defaultRender(tokens, idx, options, env, self);
    };
}

module.exports = (md, tokens=[], appendRules=true, cssClass='md') => {
    //use all tokens unless specified
    let ruleNames = Array.from(tokens);
    if (appendRules) {
        for (let ruleName in md.renderer.rules) {
            if (!ruleNames.includes(ruleName)) {
                ruleNames.push(ruleName)
            }
        }
    }
    console.log(`configuring CSS class appender for [${ruleNames}]`)
    for (let i in ruleNames) {
        let ruleName = ruleNames[i]
        // console.log(`CSS class appender for ${ruleName}`);
        decorate(md, ruleName, cssClass);
    }
};
