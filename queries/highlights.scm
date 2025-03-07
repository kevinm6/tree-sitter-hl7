;; Highlight HL7 segments (e.g., MSH, PID, OBR)
(segment_name) @keyword

;; Field separators (|)
(field_separator) @punctuation.delimiter

;; Component separators (^)
(component_separator) @punctuation.delimiter

;; Repetition separators (~)
(repetition_separator) @punctuation.delimiter

;; Subcomponent separators (&)
(subcomponent_separator) @punctuation.delimiter

;; Escape character (\)
(escape_character) @string.escape

;; Segment separator (CR/LF)
(segment_separator) @punctuation.special

;; Numeric values
(number) @number

;; String values
(string) @string

;; Highlight message header
(msh_name) @function

;; Highlight control characters inside MSH
(msh_controls) @constant.builtin
