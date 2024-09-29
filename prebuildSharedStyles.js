import fs from "fs"


/* declarations */

function makeSharedStyles() {
  const data = fs.readFileSync("src/StyleClasses.tsx", "utf8")
  const regex1 = /\s+<([^\s]+)\s*className="([^"]+)"/
  const regex2 = /\/\*.*?\*\//g
  const lines = data.split("\n")
  const result = ["", "export const sharedStyles = {"] // all keys are available
  // const result = ["", "export const sharedStyles: Record<string, string> = {"] // no keys

  lines.forEach((line) => {
    let match = line.match(regex1)

    if (match)
      return result.push(`  ${match[1]}: "${match[2]}",`)

    match = line.match(regex2)

    if (match)
      return result.push(`\n  ${match[0]}\n`)
  })

  result.push("}")
  result.push("")

  const output = result.join("\n")

  fs.writeFileSync("src/sharedStyles.ts", output)
}

/* entry point */

makeSharedStyles()
