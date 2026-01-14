/**
 * CVSS 3.0 Base Score Metrics
 */
export enum CVSS30BaseScoreMetrics {
  AttackVector = 'AV',
  AttackComplexity = 'AC',
  PrivilegesRequired = 'PR',
  UserInteraction = 'UI',
  Scope = 'S',
  ConfidentialityImpact = 'C',
  IntegrityImpact = 'I',
  AvailabilityImpact = 'A'
}

/**
 * CVSS 3.0 Attack Vector Metric Values
 */
export enum CVSS30AttackVectorMetricValues {
  Network = 'N',
  Adjacent = 'A',
  Local = 'L',
  Physical = 'P'
}

/**
 * CVSS 3.0 Attack Complexity Metric Values
 */
export enum CVSS30AttackComplexityMetricValues {
  Low = 'L',
  High = 'H'
}

/**
 * CVSS 3.0 Privileges Required Metric Values
 */
export enum CVSS30PrivilegesRequiredMetricValues {
  None = 'N',
  Low = 'L',
  High = 'H'
}

/**
 * CVSS 3.0 User Interaction Metric Values
 */
export enum CVSS30UserInteractionMetricValues {
  None = 'N',
  Required = 'R'
}

/**
 * CVSS 3.0 Scope Metric Values
 */
export enum CVSS30ScopeMetricValues {
  Unchanged = 'U',
  Changed = 'C'
}

/**
 * CVSS 3.0 Impact (Confidentiality, Integrity, Availability) Metric Values
 */
export enum CVSS30ImpactMetricValues {
  None = 'N',
  Low = 'L',
  High = 'H'
}

/**
 * CVSS 3.0 Temporal Score Metrics
 */
export enum CVSS30TemporalScoreMetrics {
  ExploitCodeMaturity = 'E',
  RemediationLevel = 'RL',
  ReportConfidence = 'RC'
}

/**
 * CVSS 3.0 Exploit Code Maturity Metric Values
 */
export enum CVSS30ExploitCodeMaturityMetricValues {
  NotDefined = 'X',
  Unproven = 'U',
  ProofOfConcept = 'P',
  Functional = 'F',
  High = 'H'
}

/**
 * CVSS 3.0 Remediation Level Metric Values
 */
export enum CVSS30RemediationLevelMetricValues {
  NotDefined = 'X',
  OfficialFix = 'O',
  TemporaryFix = 'T',
  Workaround = 'W',
  Unavailable = 'U'
}

/**
 * CVSS 3.0 Report Confidence Metric Values
 */
export enum CVSS30ReportConfidenceMetricValues {
  NotDefined = 'X',
  Unknown = 'U',
  Reasonable = 'R',
  Confirmed = 'C'
}

/**
 * CVSS 3.0 Environmental Score Metrics
 */
export enum CVSS30EnvironmentalScoreMetrics {
  ConfidentialityRequirement = 'CR',
  IntegrityRequirement = 'IR',
  AvailabilityRequirement = 'AR',
  ModifiedAttackVector = 'MAV',
  ModifiedAttackComplexity = 'MAC',
  ModifiedPrivilegesRequired = 'MPR',
  ModifiedUserInteraction = 'MUI',
  ModifiedScope = 'MS',
  ModifiedConfidentialityImpact = 'MC',
  ModifiedIntegrityImpact = 'MI',
  ModifiedAvailabilityImpact = 'MA'
}

/**
 * CVSS 3.0 Requirement (Confidentiality, Integrity, Availability) Metric Values
 */
export enum CVSS30RequirementMetricValues {
  NotDefined = 'X',
  Low = 'L',
  Medium = 'M',
  High = 'H'
}

/**
 * CVSS 3.0 Base Metrics
 */
export interface CVSS30BaseMetrics {
  attackVector: CVSS30AttackVectorMetricValues;
  attackComplexity: CVSS30AttackComplexityMetricValues;
  privilegesRequired: CVSS30PrivilegesRequiredMetricValues;
  userInteraction: CVSS30UserInteractionMetricValues;
  scope: CVSS30ScopeMetricValues;
  confidentialityImpact: CVSS30ImpactMetricValues;
  integrityImpact: CVSS30ImpactMetricValues;
  availabilityImpact: CVSS30ImpactMetricValues;
}

/**
 * CVSS 3.0 Temporal Metrics
 */
export interface CVSS30TemporalMetrics {
  exploitCodeMaturity: CVSS30ExploitCodeMaturityMetricValues;
  remediationLevel: CVSS30RemediationLevelMetricValues;
  reportConfidence: CVSS30ReportConfidenceMetricValues;
}

/**
 * CVSS 3.0 Environmental Metrics
 */
export interface CVSS30EnvironmentalMetrics {
  confidentialityRequirement: CVSS30RequirementMetricValues;
  integrityRequirement: CVSS30RequirementMetricValues;
  availabilityRequirement: CVSS30RequirementMetricValues;
  modifiedAttackVector?: CVSS30AttackVectorMetricValues;
  modifiedAttackComplexity?: CVSS30AttackComplexityMetricValues;
  modifiedPrivilegesRequired?: CVSS30PrivilegesRequiredMetricValues;
  modifiedUserInteraction?: CVSS30UserInteractionMetricValues;
  modifiedScope?: CVSS30ScopeMetricValues;
  modifiedConfidentialityImpact?: CVSS30ImpactMetricValues;
  modifiedIntegrityImpact?: CVSS30ImpactMetricValues;
  modifiedAvailabilityImpact?: CVSS30ImpactMetricValues;
}

/**
 * CVSS 3.0 Base Score
 */
export interface CVSS30BaseScore {
  value: number;
  severity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  metrics: CVSS30BaseMetrics;
  vectorString: string;
}

/**
 * CVSS 3.0 Temporal Score
 */
export interface CVSS30TemporalScore {
  value: number;
  severity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  metrics: CVSS30TemporalMetrics;
  vectorString: string;
}

/**
 * CVSS 3.0 Environmental Score
 */
export interface CVSS30EnvironmentalScore {
  value: number;
  severity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  metrics: CVSS30EnvironmentalMetrics;
  vectorString: string;
}

/**
 * CVSS 3.0 Score
 */
export interface CVSS30Score {
  version: '3.0';
  baseScore: CVSS30BaseScore;
  temporalScore?: CVSS30TemporalScore;
  environmentalScore?: CVSS30EnvironmentalScore;
  overallScore: number;
  overallSeverity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  vectorString: string;
}
