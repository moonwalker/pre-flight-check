module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-css-modules'],
  rules: {
    'rule-empty-line-before': null,

    // allow duplicated properties for mixins
    'declaration-block-no-duplicate-properties': null,
    // allow duplicated selectors for logical groupping
    'no-duplicate-selectors': null,

    // @TODO: reconsider
    // we do use some descending specificity
    'no-descending-specificity': null
  }
};
