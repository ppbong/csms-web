import type {
  CVSSVersion,
  CVSS31BaseMetrics,
  CVSS31TemporalMetrics,
  CVSS31EnvironmentalMetrics,
} from '../types/base/cvss';

/**
 * CVSS 3.1 Base Metric Definitions
 */
const CVSS_BASE_METRICS = {
  AV: 'attackVector',
  AC: 'attackComplexity',
  PR: 'privilegesRequired',
  UI: 'userInteraction',
  S: 'scope',
  C: 'confidentiality',
  I: 'integrity',
  A: 'availability'
};

const CVSS_TEMPORAL_METRICS = {
  E: 'exploitCodeMaturity',
  RL: 'remediationLevel',
  RC: 'reportConfidence'
};

const CVSS_ENVIRONMENTAL_METRICS = {
  CR: 'confidentialityRequirement',
  IR: 'integrityRequirement',
  AR: 'availabilityRequirement',
  MAV: 'modifiedAttackVector',
  MAC: 'modifiedAttackComplexity',
  MPR: 'modifiedPrivilegesRequired',
  MUI: 'modifiedUserInteraction',
  MS: 'modifiedScope',
  MC: 'modifiedConfidentiality',
  MI: 'modifiedIntegrity',
  MA: 'modifiedAvailability'
};

/**
 * Metric Value Scores
 */
const AV_SCORES = {
  N: 0.85,
  A: 0.62,
  L: 0.55,
  P: 0.2
};

const AC_SCORES = {
  L: 0.77,
  H: 0.44
};

const PR_SCORES = {
  N: {
    U: 0.85,
    C: 0.85
  },
  L: {
    U: 0.62,
    C: 0.68
  },
  H: {
    U: 0.27,
    C: 0.5
  }
};

const UI_SCORES = {
  N: 0.85,
  R: 0.62
};

const S_SCORES = {
  U: false,
  C: true
};

const IMPACT_SCORES = {
  N: 0.0,
  L: 0.22,
  M: 0.56,
  H: 0.91
};

const TEMPORAL_METRICS_SCORES = {
  E: {
    X: 1.0,
    U: 0.91,
    P: 0.94,
    F: 0.97,
    H: 1.0
  },
  RL: {
    X: 1.0,
    O: 0.95,
    T: 0.96,
    W: 0.97,
    U: 1.0
  },
  RC: {
    X: 1.0,
    U: 0.92,
    R: 0.96,
    C: 1.0
  }
};

const ENVIRONMENTAL_REQUIREMENT_SCORES = {
  X: 1.0,
  L: 0.5,
  M: 1.0,
  H: 1.5
};

/**
 * CVSS Utils Class
 */
export class CVSSUtils {
  /**
   * Parse CVSS vector string to metrics object
   * @param vectorString CVSS vector string
   * @returns Parsed metrics and version
   */
  static parseVectorString(vectorString: string): {
    version: CVSSVersion;
    baseMetrics?: CVSS31BaseMetrics;
    temporalMetrics?: CVSS31TemporalMetrics;
    environmentalMetrics?: CVSS31EnvironmentalMetrics;
  } {
    const vectorRegex = /^CVSS:([0-9]\.[0-9])\/(.*)$/;
    const match = vectorString.match(vectorRegex);
    
    if (!match) {
      throw new Error('Invalid CVSS vector string format');
    }
    
    const version = match[1] as CVSSVersion;
    const metricsString = match[2];
    const metricsPairs = metricsString?.split('/') || [];
    
    const baseMetrics: any = {};
    const temporalMetrics: any = {};
    const environmentalMetrics: any = {};
    
    for (const pair of metricsPairs) {
      const [metricCode, value] = pair.split(':');
      
      if (CVSS_BASE_METRICS[metricCode as keyof typeof CVSS_BASE_METRICS]) {
        baseMetrics[CVSS_BASE_METRICS[metricCode as keyof typeof CVSS_BASE_METRICS]] = value;
      } else if (CVSS_TEMPORAL_METRICS[metricCode as keyof typeof CVSS_TEMPORAL_METRICS]) {
        temporalMetrics[CVSS_TEMPORAL_METRICS[metricCode as keyof typeof CVSS_TEMPORAL_METRICS]] = value;
      } else if (CVSS_ENVIRONMENTAL_METRICS[metricCode as keyof typeof CVSS_ENVIRONMENTAL_METRICS]) {
        environmentalMetrics[CVSS_ENVIRONMENTAL_METRICS[metricCode as keyof typeof CVSS_ENVIRONMENTAL_METRICS]] = value;
      }
    }

    // Check for required base metrics
    if (!baseMetrics.attackVector || !baseMetrics.attackComplexity || !baseMetrics.privilegesRequired || !baseMetrics.userInteraction || !baseMetrics.scope || !baseMetrics.confidentiality || !baseMetrics.integrity || !baseMetrics.availability) {
      throw new Error('Missing required CVSS base metrics');
    }

    // Check for required temporal metrics
    if (!temporalMetrics.exploitCodeMaturity) temporalMetrics.exploitCodeMaturity = 'X';
    if (!temporalMetrics.remediationLevel) temporalMetrics.remediationLevel = 'X';
    if (!temporalMetrics.reportConfidence) temporalMetrics.reportConfidence = 'X';

    // Check for required environmental metrics
    if (!environmentalMetrics.confidentialityRequirement) environmentalMetrics.confidentialityRequirement = 'X';
    if (!environmentalMetrics.integrityRequirement) environmentalMetrics.integrityRequirement = 'X';
    if (!environmentalMetrics.availabilityRequirement) environmentalMetrics.availabilityRequirement = 'X';
    if (!environmentalMetrics.modifiedAttackVector) environmentalMetrics.modifiedAttackVector = baseMetrics.attackVector;
    if (!environmentalMetrics.modifiedAttackComplexity) environmentalMetrics.modifiedAttackComplexity = baseMetrics.attackComplexity;
    if (!environmentalMetrics.modifiedPrivilegesRequired) environmentalMetrics.modifiedPrivilegesRequired = baseMetrics.privilegesRequired;
    if (!environmentalMetrics.modifiedUserInteraction) environmentalMetrics.modifiedUserInteraction = baseMetrics.userInteraction;
    if (!environmentalMetrics.modifiedScope) environmentalMetrics.modifiedScope = baseMetrics.scope;
    if (!environmentalMetrics.modifiedConfidentiality) environmentalMetrics.modifiedConfidentiality = baseMetrics.confidentiality;
    if (!environmentalMetrics.modifiedIntegrity) environmentalMetrics.modifiedIntegrity = baseMetrics.integrity;
    if (!environmentalMetrics.modifiedAvailability) environmentalMetrics.modifiedAvailability = baseMetrics.availability;
    
    return {
      version,
      baseMetrics: Object.keys(baseMetrics).length > 0 ? baseMetrics : undefined,
      temporalMetrics: Object.keys(temporalMetrics).length > 0 ? temporalMetrics : undefined,
      environmentalMetrics: Object.keys(environmentalMetrics).length > 0 ? environmentalMetrics : undefined
    };
  }

  /**
   * Calculate CVSS base score
   * @param baseMetrics CVSS base metrics
   * @returns Base score value
   */
  static calculateBaseScore(baseMetrics: CVSS31BaseMetrics): number {
    // Unpack metrics
    const { attackVector, attackComplexity, privilegesRequired, userInteraction, scope, confidentiality, integrity, availability } = baseMetrics;
    
    // Calculate impact sub-score with scope consideration
    const impact = this.calculateImpact(confidentiality, integrity, availability, scope);

    // Calculate exploitability sub-score with scope consideration
    const exploitability = this.calculateExploitability(attackVector, attackComplexity, privilegesRequired, userInteraction, scope);
    
    let baseScore: number;
    
    if (impact <= 0) {
      baseScore = 0.0;
    } else {
      const isScopeChanged = S_SCORES[scope as keyof typeof S_SCORES];
      
      if (isScopeChanged) {
        // Scope changed - multiply by 1.08 to account for expanded attack surface
        baseScore = Math.min(1.08 * (exploitability + impact), 10.0);
      } else {
        // Scope unchanged
        baseScore = Math.min(exploitability + impact, 10.0);
      }
    }
    
    // Round up to the nearest 0.1
    return Math.ceil(baseScore * 10) / 10;
  }

  /**
   * Calculate impact sub-score
   * @param confidentiality Confidentiality value
   * @param integrity Integrity value
   * @param availability Availability value
   * @param scope Scope value
   * @returns Impact sub-score
   */
  private static calculateImpact(confidentiality: string, integrity: string, availability: string, scope: string): number {
    const C = IMPACT_SCORES[confidentiality as keyof typeof IMPACT_SCORES];
    const I = IMPACT_SCORES[integrity as keyof typeof IMPACT_SCORES];
    const A = IMPACT_SCORES[availability as keyof typeof IMPACT_SCORES];
    
    const isScopeChanged = S_SCORES[scope as keyof typeof S_SCORES];
    const impactSubScore = 1 - (1 - C) * (1 - I) * (1 - A);

    if (isScopeChanged) {
      // Scope changed (S=C)
      return 7.52 * (impactSubScore - 0.029) - 3.25 * Math.pow(impactSubScore - 0.02, 15);
    } else {
      // Scope unchanged (S=U)
      return 6.42 * impactSubScore;
    }
  }

  /**
   * Calculate exploitability sub-score
   * @param attackVector Attack vector value
   * @param attackComplexity Attack complexity value
   * @param privilegesRequired Privileges required value
   * @param userInteraction User interaction value
   * @param scope Scope value
   * @returns Exploitability sub-score
   */
  private static calculateExploitability(attackVector: string, attackComplexity: string, privilegesRequired: string, userInteraction: string, scope: string): number {
    const AV = AV_SCORES[attackVector as keyof typeof AV_SCORES];
    const AC = AC_SCORES[attackComplexity as keyof typeof AC_SCORES];
    const UI = UI_SCORES[userInteraction as keyof typeof UI_SCORES];
    const prLevelScores = PR_SCORES[privilegesRequired as keyof typeof PR_SCORES];
    // get privileges required score based on scope or modified scope is changed
    const PR = scope === 'U' ? prLevelScores.U : prLevelScores.C;
    
    return 8.22 * AV * AC * PR * UI;
  }

  /**
   * Calculate CVSS temporal score
   * @param baseScore Base score value
   * @param temporalMetrics Temporal metrics
   * @returns Temporal score value
   */
  static calculateTemporalScore(baseScore: number, temporalMetrics: CVSS31TemporalMetrics): number {
    const { exploitCodeMaturity, remediationLevel, reportConfidence } = temporalMetrics;
    
    const E = TEMPORAL_METRICS_SCORES.E[exploitCodeMaturity as keyof typeof TEMPORAL_METRICS_SCORES.E];
    const RL = TEMPORAL_METRICS_SCORES.RL[remediationLevel as keyof typeof TEMPORAL_METRICS_SCORES.RL];
    const RC = TEMPORAL_METRICS_SCORES.RC[reportConfidence as keyof typeof TEMPORAL_METRICS_SCORES.RC];
    
    const temporalScore = baseScore * E * RL * RC;
    // Round up to the nearest 0.1
    return Math.ceil(temporalScore * 10) / 10;
  }

  /**
   * Calculate CVSS environmental score
   * @param baseScore Base score value
   * @param environmentalMetrics Environmental metrics
   * @param baseMetrics Base metrics (for fallback values)
   * @returns Environmental score value
   */
  static calculateEnvironmentalScore(
    environmentalMetrics: CVSS31EnvironmentalMetrics,
    baseMetrics: CVSS31BaseMetrics,
    temporalMetrics: CVSS31TemporalMetrics,
    version: CVSSVersion,
  ): number {
    // Use modified metrics or fallback to base metrics
    const { 
      confidentialityRequirement, 
      integrityRequirement, 
      availabilityRequirement,
      modifiedAttackVector,
      modifiedAttackComplexity,
      modifiedPrivilegesRequired,
      modifiedUserInteraction,
      modifiedScope,
      modifiedConfidentiality,
      modifiedIntegrity,
      modifiedAvailability
    } = environmentalMetrics;
    
    const envBaseMetrics = {
      attackVector: modifiedAttackVector || baseMetrics.attackVector,
      attackComplexity: modifiedAttackComplexity || baseMetrics.attackComplexity,
      privilegesRequired: modifiedPrivilegesRequired || baseMetrics.privilegesRequired,
      userInteraction: modifiedUserInteraction || baseMetrics.userInteraction,
      scope: modifiedScope || baseMetrics.scope,
      confidentiality: modifiedConfidentiality || baseMetrics.confidentiality,
      integrity: modifiedIntegrity || baseMetrics.integrity,
      availability: modifiedAvailability || baseMetrics.availability
    };
    
    // Apply requirement adjustments
    const CR = ENVIRONMENTAL_REQUIREMENT_SCORES[confidentialityRequirement as keyof typeof ENVIRONMENTAL_REQUIREMENT_SCORES];
    const IR = ENVIRONMENTAL_REQUIREMENT_SCORES[integrityRequirement as keyof typeof ENVIRONMENTAL_REQUIREMENT_SCORES];
    const AR = ENVIRONMENTAL_REQUIREMENT_SCORES[availabilityRequirement as keyof typeof ENVIRONMENTAL_REQUIREMENT_SCORES];

    // Apply exploitability factors
    const { exploitCodeMaturity, remediationLevel, reportConfidence } = temporalMetrics;
    const E = TEMPORAL_METRICS_SCORES.E[exploitCodeMaturity as keyof typeof TEMPORAL_METRICS_SCORES.E];
    const RL = TEMPORAL_METRICS_SCORES.RL[remediationLevel as keyof typeof TEMPORAL_METRICS_SCORES.RL];
    const RC = TEMPORAL_METRICS_SCORES.RC[reportConfidence as keyof typeof TEMPORAL_METRICS_SCORES.RC];
    
    // Calculate adjusted impact with scope consideration
    const { confidentiality, integrity, availability, scope } = envBaseMetrics;
    const rawC = IMPACT_SCORES[confidentiality as keyof typeof IMPACT_SCORES];
    const rawI = IMPACT_SCORES[integrity as keyof typeof IMPACT_SCORES];
    const rawA = IMPACT_SCORES[availability as keyof typeof IMPACT_SCORES];
    
    // Apply requirement factors
    const adjustedC = rawC * CR;
    const adjustedI = rawI * IR;
    const adjustedA = rawA * AR;
    
    // Calculate adjusted impact with scope consideration (same formula as base impact)
    const isScopeChanged = S_SCORES[scope as keyof typeof S_SCORES];
    const adjustedImpactSubScore = Math.min(1 - (1 - adjustedC) * (1 - adjustedI) * (1 - adjustedA), 0.915);
    
    let adjustedImpact: number;
    if (isScopeChanged) {
      // Scope changed (S=C)
      if (version === '3.1') {
        adjustedImpact = 7.52 * (adjustedImpactSubScore - 0.029) - 3.25 * Math.pow(adjustedImpactSubScore * 0.9731 - 0.02, 13);
      } else {
        adjustedImpact = 7.52 * (adjustedImpactSubScore - 0.029) - 3.25 * Math.pow(adjustedImpactSubScore - 0.02, 15);
      }
    } else {
      // Scope unchanged (S=U)
      adjustedImpact = 6.42 * adjustedImpactSubScore;
    }

    // Calculate exploitability
    const exploitability = this.calculateExploitability(
      envBaseMetrics.attackVector,
      envBaseMetrics.attackComplexity,
      envBaseMetrics.privilegesRequired,
      envBaseMetrics.userInteraction,
      envBaseMetrics.scope,
    );
    
    // Calculate environmental score
    let environmentalScore: number;
    
    if (adjustedImpact <= 0) {
      environmentalScore = 0.0;
    } else {
      if (isScopeChanged) {
        // Scope changed - multiply by 1.08 to account for expanded attack surface
        environmentalScore = Math.min(1.08 * (exploitability + adjustedImpact), 10.0);
      } else {
        // Scope unchanged
        environmentalScore = Math.min(exploitability + adjustedImpact, 10.0);
      }
      environmentalScore = Math.ceil(environmentalScore * 10) / 10;
      environmentalScore = environmentalScore * E * RL * RC;
    }
    
    // Round to nearest 0.1
    return Math.ceil(environmentalScore * 10) / 10;
  }

  /**
   * Get severity level from score
   * @param score CVSS score value
   * @returns Severity level
   */
  static getSeverity(score: number): 'None' | 'Low' | 'Medium' | 'High' | 'Critical' {
    if (score >= 9.0) return 'Critical';
    if (score >= 7.0) return 'High';
    if (score >= 4.0) return 'Medium';
    if (score >= 0.1) return 'Low';
    return 'None';
  }

  /**
   * Validate CVSS vector string
   * @param vectorString CVSS vector string
   * @returns True if valid, false otherwise
   */
  static isValidVector(vectorString: string): boolean {
    try {
      this.parseVectorString(vectorString);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Extract base vector from full vector
   * @param vectorString CVSS vector string
   * @returns Base vector string
   */
  static extractBaseVector(vectorString: string): string {
    const vectorRegex = /^CVSS:([0-9]\.[0-9])\/(.*)$/;
    const match = vectorString.match(vectorRegex);
    
    if (!match) return vectorString;
    
    const version = match[1];
    const metricsString = match[2];
    const metricsPairs = metricsString?.split('/') || [];
    
    const baseMetricsPairs = metricsPairs.filter(pair => {
      const metricCode = pair.split(':')[0];
      return CVSS_BASE_METRICS[metricCode as keyof typeof CVSS_BASE_METRICS];
    });
    
    return `CVSS:${version}/${baseMetricsPairs.join('/')}`;
  }
}
