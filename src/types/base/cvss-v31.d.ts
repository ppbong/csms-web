/**
 * CVSS 3.1 Base Score Metrics
 */
export enum CVSS31BaseScoreMetric {
  AttackVector = 'AV',
  AttackComplexity = 'AC',
  PrivilegesRequired = 'PR',
  UserInteraction = 'UI',
  Scope = 'S',
  Confidentiality = 'C',
  Integrity = 'I',
  Availability = 'A'
}

/**
 * CVSS 3.1 Attack Vector Metric Values
 */
export enum CVSS31AttackVectorMetricValues {
  Network = 'N',
  Adjacent = 'A',
  Local = 'L',
  Physical = 'P'
}

/**
 * CVSS 3.1 Attack Complexity Metric Values
 */
export enum CVSS31AttackComplexityMetricValues {
  Low = 'L',
  High = 'H'
}

/**
 * CVSS 3.1 Privileges Required Metric Values
 */
export enum CVSS31PrivilegesRequiredMetricValues {
  None = 'N',
  Low = 'L',
  High = 'H'
}

/**
 * CVSS 3.1 User Interaction Metric Values
 */
export enum CVSS31UserInteractionMetricValues {
  None = 'N',
  Required = 'R'
}

/**
 * CVSS 3.1 Scope Metric Values
 */
export enum CVSS31ScopeMetricValues {
  Unchanged = 'U',
  Changed = 'C'
}

/**
 * CVSS 3.1 Impact (Confidentiality, Integrity, Availability) Metric Values
 */
export enum CVSS31ImpactMetricValues {
  None = 'N',
  Low = 'L',
  High = 'H'
}

/**
 * CVSS 3.1 Temporal Score Metrics
 */
export enum CVSS31TemporalScoreMetric {
  ExploitCodeMaturity = 'E',
  RemediationLevel = 'RL',
  ReportConfidence = 'RC'
}

/**
 * CVSS 3.1 Exploit Code Maturity Metric Values
 */
export enum CVSS31ExploitCodeMaturityMetricValues {
  NotDefined = 'X',
  Unproven = 'U',
  ProofOfConcept = 'P',
  Functional = 'F',
  High = 'H'
}

/**
 * CVSS 3.1 Remediation Level Metric Values
 */
export enum CVSS31RemediationLevelMetricValues {
  NotDefined = 'X',
  OfficialFix = 'O',
  TemporaryFix = 'T',
  Workaround = 'W',
  Unavailable = 'U'
}

/**
 * CVSS 3.1 Report Confidence Metric Values
 */
export enum CVSS31ReportConfidenceMetricValues {
  NotDefined = 'X',
  Unknown = 'U',
  Reasonable = 'R',
  Confirmed = 'C'
}

/**
 * CVSS 3.1 Environmental Score Metrics
 */
export enum CVSS31EnvironmentalScoreMetrics {
  ConfidentialityRequirement = 'CR',
  IntegrityRequirement = 'IR',
  AvailabilityRequirement = 'AR',
  ModifiedAttackVector = 'MAV',
  ModifiedAttackComplexity = 'MAC',
  ModifiedPrivilegesRequired = 'MPR',
  ModifiedUserInteraction = 'MUI',
  ModifiedScope = 'MS',
  ModifiedConfidentiality = 'MC',
  ModifiedIntegrity = 'MI',
  ModifiedAvailability = 'MA'
}

/**
 * CVSS 3.1 Requirement (Confidentiality, Integrity, Availability) Metric Values
 */
export enum CVSS31RequirementMetricValues {
  NotDefined = 'X',
  Low = 'L',
  Medium = 'M',
  High = 'H'
}

/**
 * CVSS 3.1 Base Metrics
 */
export interface CVSS31BaseMetrics {
  attackVector: CVSS31AttackVectorMetricValues;
  attackComplexity: CVSS31AttackComplexityMetricValues;
  privilegesRequired: CVSS31PrivilegesRequiredMetricValues;
  userInteraction: CVSS31UserInteractionMetricValues;
  scope: CVSS31ScopeMetricValues;
  confidentiality: CVSS31ImpactMetricValues;
  integrity: CVSS31ImpactMetricValues;
  availability: CVSS31ImpactMetricValues;
}

/**
 * CVSS 3.1 Temporal Metrics
 */
export interface CVSS31TemporalMetrics {
  exploitCodeMaturity: CVSS31ExploitCodeMaturityMetricValues;
  remediationLevel: CVSS31RemediationLevelMetricValues;
  reportConfidence: CVSS31ReportConfidenceMetricValues;
}

/**
 * CVSS 3.1 Environmental Metrics
 */
export interface CVSS31EnvironmentalMetrics {
  confidentialityRequirement: CVSS31RequirementMetricValues;
  integrityRequirement: CVSS31RequirementMetricValues;
  availabilityRequirement: CVSS31RequirementMetricValues;
  modifiedAttackVector?: CVSS31AttackVectorMetricValues;
  modifiedAttackComplexity?: CVSS31AttackComplexityMetricValues;
  modifiedPrivilegesRequired?: CVSS31PrivilegesRequiredMetricValues;
  modifiedUserInteraction?: CVSS31UserInteractionMetricValues;
  modifiedScope?: CVSS31ScopeMetricValues;
  modifiedConfidentiality?: CVSS31ImpactMetricValues;
  modifiedIntegrity?: CVSS31ImpactMetricValues;
  modifiedAvailability?: CVSS31ImpactMetricValues;
}

/**
 * CVSS 3.1 Base Score
 */
export interface CVSS31BaseScore {
  value: number;
  severity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  metrics: CVSS31BaseMetrics;
  vectorString: string;
}

/**
 * CVSS 3.1 Temporal Score
 */
export interface CVSS31TemporalScore {
  value: number;
  severity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  metrics: CVSS31TemporalMetrics;
  vectorString: string;
}

/**
 * CVSS 3.1 Environmental Score
 */
export interface CVSS31EnvironmentalScore {
  value: number;
  severity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  metrics: CVSS31EnvironmentalMetrics;
  vectorString: string;
}

/**
 * CVSS 3.1 Score
 */
export interface CVSS31Score {
  version: '3.1';
  baseScore: CVSS31BaseScore;
  temporalScore?: CVSS31TemporalScore;
  environmentalScore?: CVSS31EnvironmentalScore;
  overallScore: number;
  overallSeverity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
  vectorString: string;
}
