/**
 * @file Health Level 7 Messages
 * @author Kenton Hamaluik <kenton@hamaluik.ca>
 * @license Apache-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "hl7",

  rules: {
    message: $ => seq($.msh, repeat(seq($.field_separator, optional($.field))), $.segment_separator, repeat($.segment)),

    msh: $ => seq(
      $.msh_name,
      $.msh_controls,
    ),
 
    msh_name: $ => "MSH",
    msh_controls: $ => seq(
      $.field_separator,
      $.component_separator,
      $.repetition_separator,
      $.escape_character,
      $.subcomponent_separator,
    ),
    segment_name: $ => /[A-Z0-9]{3}/,

    field_separator: $ => "|",
    component_separator: $ => "^",
    repetition_separator: $ => "~",
    escape_character: $ => "\\",
    subcomponent_separator: $ => "&",
    segment_separator: $ => choice("\r", "\n", "\r\n"),

    segment: $ => seq($.segment_name, repeat(seq($.field_separator, optional($.field))), $.segment_separator),

    field: $ => seq($.repeat, repeat(seq($.repetition_separator, $.repeat))),
    repeat: $ => seq($.component, repeat(seq($.component_separator, $.component))),
    component: $ => seq($.subcomponent, repeat(seq($.subcomponent_separator, $.subcomponent))),
    subcomponent: $ => choice($.number, $.string),

    number: $ => /\d+/,
    string: $ => /[^|^~\\&\r\n]*/
  }
});
