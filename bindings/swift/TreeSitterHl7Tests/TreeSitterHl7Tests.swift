import XCTest
import SwiftTreeSitter
import TreeSitterHl7

final class TreeSitterHl7Tests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_hl7())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Hl7 grammar")
    }
}
