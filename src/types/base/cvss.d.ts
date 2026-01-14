export * from './cvss-v30';
export * from './cvss-v31';

// CVSS Version Supported
export type CVSSVersion = '3.0' | '3.1';

// CVSS 3.1 Base Metrics Priority
export type CVSSBaseMetrics = import('./cvss-v31').CVSS30BaseMetrics | import('./cvss-v30').CVSS31BaseMetrics;
export type CVSSBaseScore = import('./cvss-v31').CVSS30BaseScore | import('./cvss-v30').CVSS31BaseScore;
export type CVSSScore = import('./cvss-v31').CVSS30Score | import('./cvss-v30').CVSS31Score;

// CVSS Vector
export interface CVSSVector {
  version: CVSSVersion;
  vectorString: string;
  baseScore: number;
  baseSeverity: 'None' | 'Low' | 'Medium' | 'High' | 'Critical';
}

// CVSS Analysis
export interface CVSSAnalysis {
  scores: CVSSScore[];
  latestScore: CVSSScore;
  baseVector: string;
  temporalVector?: string;
  environmentalVector?: string;
  version: CVSSVersion;
}
