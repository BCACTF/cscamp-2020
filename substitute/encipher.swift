// Usage: swift encipher.swift <key> <plaintext>
// Example: swift encipher.swift "$(cat key.txt)" "$(cat plaintext.txt)"
let key = [Character: Character](uniqueKeysWithValues: zip("abcdefghijklmnopqrstuvwxyz", CommandLine.arguments[1]))
print(String(CommandLine.arguments[2].lowercased().map { key[$0] ?? $0 }), terminator: "")