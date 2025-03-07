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
    // HL7 Message Structure
    message: ($) =>
      seq(
        $.msh,
        repeat($.segment), // HL7 is made of multiple segments
      ),

    // MSH Segment (Message Header)
    msh: ($) =>
      seq(
        "MSH",
        $.msh_controls,
        repeat(seq($.field_separator, optional($.field))), // Fields after MSH
        $.segment_separator,
      ),

    msh_controls: ($) =>
      seq(
        $.field_separator,
        $.component_separator,
        $.repetition_separator,
        $.escape_character,
        $.subcomponent_separator,
      ),

    // Generic Segment (e.g., PID, OBR, ORC, etc.)
    segment: ($) =>
      seq(
        $.segment_name,
        repeat(seq($.field_separator, optional($.field))), // Fields in segment
        $.segment_separator,
      ),

    segment_name: ($) => /[A-Z0-9]{3}/, // HL7 segments typically 3-letter uppercase codes

    // HL7 Separators
    field_separator: ($) => "|",
    component_separator: ($) => "^",
    repetition_separator: ($) => "~",
    escape_character: ($) => "\\",
    subcomponent_separator: ($) => "&",
    segment_separator: ($) => choice("\r", "\n", "\r\n"), // HL7 allows different line endings

    // Field Handling
    field: ($) =>
      seq(
        $.repeat, // at least one 'repeat' is required
        repeat(seq($.repetition_separator, $.repeat)),
      ),

    repeat: ($) =>
      seq(
        $.component,
        repeat(seq($.component_separator, optional($.component))),
      ),

    component: ($) =>
      seq(
        $.subcomponent,
        repeat(seq($.subcomponent_separator, optional($.subcomponent))),
      ),

    subcomponent: ($) => choice($.number, $.string),

    // HL7 Data Types
    number: ($) => /\d+/,
    string: ($) => /[^|^~\\&\r\n]+/, // Avoids breaking on separators
  },
});
