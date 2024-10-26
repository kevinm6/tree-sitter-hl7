// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "TreeSitterHl7",
    products: [
        .library(name: "TreeSitterHl7", targets: ["TreeSitterHl7"]),
    ],
    dependencies: [
        .package(url: "https://github.com/ChimeHQ/SwiftTreeSitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterHl7",
            dependencies: [],
            path: ".",
            sources: [
                "src/parser.c",
                // NOTE: if your language has an external scanner, add it here.
            ],
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterHl7Tests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterHl7",
            ],
            path: "bindings/swift/TreeSitterHl7Tests"
        )
    ],
    cLanguageStandard: .c11
)
