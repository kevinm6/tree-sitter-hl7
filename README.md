# tree-sitter-hl7

A (basic) [tree-sitter](https://tree-sitter.github.io) grammar for HL7 messages.

## Installation

### Using NeoVim

TODO: better installation & setup

1. Clone the repository somewhere.
2. Ensure the hl7 filetype is being loaded by NeoVim:
    * Create / edit `~/.config/nvim/filetype.lua` and add the following:
      ```lua
      vim.filetype.add({
        extension = {
          hl7 = 'hl7',
        },
      })
     ```
3. Add the hl7 config to the `treesitter_parser_config`:
   ```lua
   treesitter_parser_config.hl7 = {
    install_info = {
        url = "<path to tree-sitter-hl7>",
        files = { "src/parser.c" },
        generate_reqires_npm = false,
        requires_generate_from_grammar = false,
    },
    filetype = "hl7",
   }
   ```
4. Add the queries to NeoVim:
  ```bash
  mkdir -p ~/.config/nvim/queries
  ln -s <path to tree-sitter-hl7>/queries ~/.config/nvim/queries/hl7
  ```
