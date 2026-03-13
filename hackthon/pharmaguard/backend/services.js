const fs = require("fs");

const TARGET_GENES = [
  "CYP2D6",
  "CYP2C19",
  "CYP2C9",
  "SLCO1B1",
  "TPMT",
  "DPYD"
];

function parseVCF(path) {

  const file = fs.readFileSync(path, "utf8");
  const lines = file.split("\n");

  let variants = [];

  lines.forEach(line => {

    if (line.startsWith("#")) return;

    const cols = line.split("\t");

    const rsid = cols[2];
    const info = cols[7];

    if (!info) return;

    const geneMatch = info.match(/GENE=([^;]+)/);

    if (geneMatch) {
      const gene = geneMatch[1];

      if (TARGET_GENES.includes(gene)) {
        variants.push({ gene, rsid });
      }
    }
  });

  return variants;
}

module.exports = parseVCF;