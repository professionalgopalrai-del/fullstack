const express = require("express");
const multer = require("multer");

const parseVCF = require("../services/vcfParser");
const mapPhenotype = require("../services/phenotypeMapper");
const evaluateRisk = require("../services/ruleEngine");
const generateExplanation = require("../services/llmService");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("file"), async (req, res) => {

  const drug = req.body.drug;
  const filePath = req.file.path;

  const variants = parseVCF(filePath);

  const phenotype = mapPhenotype(variants);

  const risk = evaluateRisk(drug, phenotype);

  const explanation = await generateExplanation(drug, phenotype);

  res.json({
    patient_id: "PATIENT_001",
    drug,
    timestamp: new Date().toISOString(),

    risk_assessment: risk,

    pharmacogenomic_profile: {
      phenotype,
      detected_variants: variants
    },

    llm_generated_explanation: {
      summary: explanation
    },

    quality_metrics: {
      vcf_parsing_success: true
    }
  });
});

module.exports = router;