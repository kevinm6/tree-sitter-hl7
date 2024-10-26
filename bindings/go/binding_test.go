package tree_sitter_hl7_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_hl7 "github.com/hamaluik/tree-sitter-hl7/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_hl7.Language())
	if language == nil {
		t.Errorf("Error loading Hl7 grammar")
	}
}
