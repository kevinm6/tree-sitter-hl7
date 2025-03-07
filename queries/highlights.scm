; Highlight MSH segment name
("MSH" @keyword)

;; Highlight HL7 segments (e.g., MSH, PID, OBR)
(segment_name) @type

;; Highlight separators (|)
(field_separator) @punctuation.delimiter
(component_separator) @punctuation.delimiter
(repetition_separator) @punctuation.delimiter
(subcomponent_separator) @punctuation.delimiter
(segment_separator) @punctuation.special
(escape_character) @string.escape

; Highlight fields, component and subcomponent
(field) @variable
(repeat) @variable
(component) @variable
(subcomponent) @string

;; Numeric values
(number) @number

;; String values
(string) @string

;; Highlight message header
;(msh_name) @function

;; Highlight control characters inside MSH
(msh_controls) @constant.builtin
