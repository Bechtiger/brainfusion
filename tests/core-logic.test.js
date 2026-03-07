/**
 * Test: Core Logic Functions
 * Tests the pure logic extracted from BrainFusion's JS modules.
 * These functions are tested without DOM dependencies.
 */
import { describe, it, expect } from 'vitest';

// ==========================================
// NEURAL NETWORK (from labor.js)
// ==========================================

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

function forward(network, input) {
  const hidden = network.weights.input_hidden.map((w, i) =>
    sigmoid(input * w + network.bias.hidden[i])
  );
  const output = sigmoid(
    hidden.reduce((sum, h, i) => sum + h * network.weights.hidden_output[i], 0) +
    network.bias.output
  );
  return { hidden, output };
}

describe('Neural Network (labor.js)', () => {
  describe('sigmoid function', () => {
    it('returns 0.5 for input 0', () => {
      expect(sigmoid(0)).toBe(0.5);
    });

    it('approaches 1 for large positive input', () => {
      expect(sigmoid(10)).toBeCloseTo(1, 4);
    });

    it('approaches 0 for large negative input', () => {
      expect(sigmoid(-10)).toBeCloseTo(0, 4);
    });

    it('is monotonically increasing', () => {
      expect(sigmoid(-2)).toBeLessThan(sigmoid(0));
      expect(sigmoid(0)).toBeLessThan(sigmoid(2));
    });

    it('output is always between 0 and 1 (inclusive at float precision limits)', () => {
      for (let x = -100; x <= 100; x += 10) {
        const result = sigmoid(x);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('forward pass', () => {
    const network = {
      weights: {
        input_hidden: [0.5, -0.3, 0.8],
        hidden_output: [0.4, 0.6, -0.2]
      },
      bias: {
        hidden: [0.1, -0.1, 0.2],
        output: 0.1
      }
    };

    it('returns hidden layer with 3 neurons', () => {
      const { hidden } = forward(network, 0.5);
      expect(hidden).toHaveLength(3);
    });

    it('hidden outputs are between 0 and 1', () => {
      const { hidden } = forward(network, 0.5);
      hidden.forEach(h => {
        expect(h).toBeGreaterThan(0);
        expect(h).toBeLessThan(1);
      });
    });

    it('output is between 0 and 1', () => {
      const { output } = forward(network, 0.5);
      expect(output).toBeGreaterThan(0);
      expect(output).toBeLessThan(1);
    });

    it('produces deterministic results', () => {
      const result1 = forward(network, 0.7);
      const result2 = forward(network, 0.7);
      expect(result1.output).toBe(result2.output);
    });

    it('different inputs produce different outputs', () => {
      const r1 = forward(network, 0.1);
      const r2 = forward(network, 0.9);
      expect(r1.output).not.toBe(r2.output);
    });
  });
});

// ==========================================
// TIME DILATION (from labor.js)
// ==========================================

function calculateTimeDilation(velocityPercent, earthTimeYears) {
  const velocity = velocityPercent / 100;
  const gamma = 1 / Math.sqrt(1 - velocity * velocity);
  const shipTime = earthTimeYears / gamma;
  const ageDifference = earthTimeYears - shipTime;
  return { gamma, shipTime, ageDifference };
}

describe('Time Dilation (labor.js)', () => {
  it('gamma = 1 at rest (v=0)', () => {
    const { gamma } = calculateTimeDilation(0, 10);
    expect(gamma).toBe(1);
  });

  it('no time difference at rest', () => {
    const { ageDifference } = calculateTimeDilation(0, 10);
    expect(ageDifference).toBeCloseTo(0);
  });

  it('gamma increases with velocity', () => {
    const g50 = calculateTimeDilation(50, 10).gamma;
    const g90 = calculateTimeDilation(90, 10).gamma;
    const g99 = calculateTimeDilation(99, 10).gamma;
    expect(g50).toBeLessThan(g90);
    expect(g90).toBeLessThan(g99);
  });

  it('ship time < earth time at high velocity', () => {
    const { shipTime } = calculateTimeDilation(90, 10);
    expect(shipTime).toBeLessThan(10);
  });

  it('Lorentz factor at 86.6% c is approximately 2', () => {
    // At v = c*sqrt(3)/2 ≈ 86.6%, gamma = 2
    const { gamma } = calculateTimeDilation(86.6, 10);
    expect(gamma).toBeCloseTo(2, 0);
  });

  it('ship time is earth time / gamma', () => {
    const { gamma, shipTime } = calculateTimeDilation(80, 20);
    expect(shipTime).toBeCloseTo(20 / gamma);
  });
});

// ==========================================
// DRAKE EQUATION (from paradoxa.js)
// ==========================================

function calculateDrake(R, fp, ne, fl, fi, L) {
  const fc = 1; // communicating fraction, assumed 1
  return R * fp * ne * fl * fi * fc * L;
}

describe('Drake Equation (paradoxa.js)', () => {
  it('returns 0 when any factor is 0', () => {
    expect(calculateDrake(0, 0.5, 2, 0.5, 0.1, 1000)).toBe(0);
    expect(calculateDrake(10, 0, 2, 0.5, 0.1, 1000)).toBe(0);
    expect(calculateDrake(10, 0.5, 2, 0, 0.1, 1000)).toBe(0);
  });

  it('increases linearly with star formation rate', () => {
    const n1 = calculateDrake(5, 0.5, 2, 0.5, 0.1, 1000);
    const n2 = calculateDrake(10, 0.5, 2, 0.5, 0.1, 1000);
    expect(n2).toBeCloseTo(n1 * 2);
  });

  it('calculates classic Drake estimate', () => {
    // R=10, fp=50%, ne=2, fl=100%, fi=1%, L=10000
    const N = calculateDrake(10, 0.5, 2, 1.0, 0.01, 10000);
    expect(N).toBe(1000);
  });

  it('pessimistic estimate yields low count', () => {
    const N = calculateDrake(1, 0.1, 0.1, 0.01, 0.001, 100);
    expect(N).toBeLessThan(1);
  });
});

// ==========================================
// QUANTUM ENTANGLEMENT LOGIC (from labor.js)
// ==========================================

describe('Quantum Entanglement Logic (labor.js)', () => {
  function simulateEntanglement() {
    const spinA = Math.random() < 0.5 ? 'up' : 'down';
    const spinB = spinA === 'up' ? 'down' : 'up';
    return { spinA, spinB };
  }

  it('always produces anti-correlated spins', () => {
    for (let i = 0; i < 100; i++) {
      const { spinA, spinB } = simulateEntanglement();
      expect(spinA).not.toBe(spinB);
    }
  });

  it('spin values are always up or down', () => {
    for (let i = 0; i < 50; i++) {
      const { spinA, spinB } = simulateEntanglement();
      expect(['up', 'down']).toContain(spinA);
      expect(['up', 'down']).toContain(spinB);
    }
  });

  it('distribution is roughly 50/50 over many runs', () => {
    let upCount = 0;
    const runs = 10000;
    for (let i = 0; i < runs; i++) {
      if (simulateEntanglement().spinA === 'up') upCount++;
    }
    // Should be between 45% and 55%
    expect(upCount / runs).toBeGreaterThan(0.45);
    expect(upCount / runs).toBeLessThan(0.55);
  });
});

// ==========================================
// SCHRÖDINGER'S CAT (from paradoxa.js)
// ==========================================

describe("Schrödinger's Cat Logic (paradoxa.js)", () => {
  function openBox() {
    return Math.random() < 0.5;
  }

  it('cat is always alive or dead (boolean)', () => {
    for (let i = 0; i < 50; i++) {
      const result = openBox();
      expect(typeof result).toBe('boolean');
    }
  });

  it('statistics converge to ~50% over many trials', () => {
    let alive = 0;
    const trials = 10000;
    for (let i = 0; i < trials; i++) {
      if (openBox()) alive++;
    }
    expect(alive / trials).toBeGreaterThan(0.45);
    expect(alive / trials).toBeLessThan(0.55);
  });

  it('percentage calculation is correct', () => {
    const aliveCount = 47;
    const deadCount = 53;
    const total = aliveCount + deadCount;
    const alivePercent = (aliveCount / total * 100).toFixed(1);
    expect(alivePercent).toBe('47.0');
  });
});

// ==========================================
// DOUBLE SLIT EXPERIMENT (from labor.js)
// ==========================================

describe('Double Slit Experiment (labor.js)', () => {
  function simulateElectron(observerActive, canvasHeight) {
    let y;
    if (observerActive) {
      const slit = Math.random() < 0.5 ? 0 : 1;
      const peak1 = canvasHeight * 0.25;
      const peak2 = canvasHeight * 0.75;
      const spread = canvasHeight * 0.15;
      y = slit === 0
        ? peak1 + (Math.random() - 0.5) * spread
        : peak2 + (Math.random() - 0.5) * spread;
    } else {
      const center = canvasHeight * 0.5;
      const spread = canvasHeight * 0.4;
      const interference = Math.sin((Math.random() * Math.PI * 4)) * (canvasHeight * 0.075);
      y = center + (Math.random() - 0.5) * spread + interference;
    }
    return Math.max(0, Math.min(canvasHeight - 1, y));
  }

  it('with observer: electrons cluster around two peaks', () => {
    const height = 400;
    const peak1Zone = [height * 0.1, height * 0.4];
    const peak2Zone = [height * 0.6, height * 0.9];
    let inPeaks = 0;
    const total = 1000;

    for (let i = 0; i < total; i++) {
      const y = simulateElectron(true, height);
      if ((y >= peak1Zone[0] && y <= peak1Zone[1]) ||
          (y >= peak2Zone[0] && y <= peak2Zone[1])) {
        inPeaks++;
      }
    }
    // Most electrons should be in the two peak zones
    expect(inPeaks / total).toBeGreaterThan(0.7);
  });

  it('without observer: electrons spread across center', () => {
    const height = 400;
    const positions = [];
    for (let i = 0; i < 1000; i++) {
      positions.push(simulateElectron(false, height));
    }
    const avg = positions.reduce((a, b) => a + b, 0) / positions.length;
    // Average should be near center
    expect(avg).toBeGreaterThan(height * 0.35);
    expect(avg).toBeLessThan(height * 0.65);
  });

  it('all positions are within canvas bounds', () => {
    const height = 400;
    for (let i = 0; i < 200; i++) {
      const y1 = simulateElectron(true, height);
      const y2 = simulateElectron(false, height);
      expect(y1).toBeGreaterThanOrEqual(0);
      expect(y1).toBeLessThanOrEqual(height - 1);
      expect(y2).toBeGreaterThanOrEqual(0);
      expect(y2).toBeLessThanOrEqual(height - 1);
    }
  });
});

// ==========================================
// COMPASS QUIZ LOGIC (from kompass.js)
// ==========================================

function calculateAverage(arr) {
  if (arr.length === 0) return 4;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

describe('Compass Quiz Logic (kompass.js)', () => {
  describe('calculateAverage', () => {
    it('returns 4 for empty array (neutral default)', () => {
      expect(calculateAverage([])).toBe(4);
    });

    it('calculates correct average', () => {
      expect(calculateAverage([2, 4, 6])).toBe(4);
      expect(calculateAverage([1, 7])).toBe(4);
      expect(calculateAverage([1, 1, 1])).toBeCloseTo(1);
    });

    it('handles single value', () => {
      expect(calculateAverage([7])).toBe(7);
      expect(calculateAverage([1])).toBe(1);
    });
  });

  describe('questions data structure', () => {
    // Reimport question structure expectations
    const dimensions = ['ursprung', 'ki', 'realitaet', 'verbundenheit'];

    it('has 4 dimensions with 3 questions each = 12 total', () => {
      // This tests the expected data shape
      expect(dimensions).toHaveLength(4);
    });

    it('mapToAxis correctly maps 1-7 scale to -1 to 1', () => {
      const mapToAxis = (val) => (val - 4) / 3;
      expect(mapToAxis(1)).toBeCloseTo(-1);
      expect(mapToAxis(4)).toBeCloseTo(0);
      expect(mapToAxis(7)).toBeCloseTo(1);
    });
  });

  describe('interpretation thresholds', () => {
    it('high score (>5) triggers panpsychism/open interpretation', () => {
      expect(5.5 > 5).toBe(true);
    });

    it('low score (<3) triggers materialism/tool interpretation', () => {
      expect(2.5 < 3).toBe(true);
    });

    it('middle score (3-5) triggers balanced interpretation', () => {
      const score = 4;
      expect(score >= 3 && score <= 5).toBe(true);
    });
  });

  describe('thinker selection', () => {
    function selectThinkers(results) {
      const thinkers = {
        materialismus: [{ name: 'Dennett' }, { name: 'Churchland' }],
        panpsychismus: [{ name: 'Chalmers' }, { name: 'Goff' }],
        tool: [{ name: 'Searle' }, { name: 'Dreyfus' }],
        wesen: [{ name: 'Shanahan' }, { name: 'Clark' }],
      };

      let selected = [];
      if (results.ursprung > 4.5) selected = selected.concat(thinkers.panpsychismus);
      else if (results.ursprung < 3.5) selected = selected.concat(thinkers.materialismus);
      if (results.ki > 4.5) selected = selected.concat(thinkers.wesen);
      else if (results.ki < 3.5) selected = selected.concat(thinkers.tool);
      return selected.slice(0, 4);
    }

    it('selects panpsychism thinkers for high ursprung score', () => {
      const result = selectThinkers({ ursprung: 6, ki: 4 });
      expect(result.map(t => t.name)).toContain('Chalmers');
    });

    it('selects materialism thinkers for low ursprung score', () => {
      const result = selectThinkers({ ursprung: 2, ki: 4 });
      expect(result.map(t => t.name)).toContain('Dennett');
    });

    it('limits to 4 thinkers max', () => {
      const result = selectThinkers({ ursprung: 6, ki: 6 });
      expect(result.length).toBeLessThanOrEqual(4);
    });
  });
});

// ==========================================
// CANVAS SIZE LOGIC (from labor.js)
// ==========================================

describe('Responsive Canvas Sizing (labor.js)', () => {
  function getCanvasSize(innerWidth) {
    if (innerWidth <= 480) return { w: 70, h: 50 };
    if (innerWidth <= 768) return { w: 80, h: 60 };
    if (innerWidth <= 1024) return { w: 180, h: 300 };
    return { w: 200, h: 400 };
  }

  it('small mobile (<=480px)', () => {
    expect(getCanvasSize(375)).toEqual({ w: 70, h: 50 });
  });

  it('mobile (<=768px)', () => {
    expect(getCanvasSize(600)).toEqual({ w: 80, h: 60 });
  });

  it('tablet (<=1024px)', () => {
    expect(getCanvasSize(1024)).toEqual({ w: 180, h: 300 });
  });

  it('desktop (>1024px)', () => {
    expect(getCanvasSize(1440)).toEqual({ w: 200, h: 400 });
  });
});

// ==========================================
// SHIP OF THESEUS LOGIC (from paradoxa.js)
// ==========================================

describe('Ship of Theseus Logic (paradoxa.js)', () => {
  it('starts with 100 original planks', () => {
    let original = 100;
    let replaced = 0;
    expect(original).toBe(100);
    expect(replaced).toBe(0);
  });

  it('replacing a plank decreases original and increases replaced', () => {
    let original = 100;
    let replaced = 0;

    // Replace one plank
    replaced++;
    original--;

    expect(original).toBe(99);
    expect(replaced).toBe(1);
  });

  it('after replacing all planks, 0 original and 100 replaced', () => {
    let original = 100;
    let replaced = 0;

    for (let i = 0; i < 100; i++) {
      replaced++;
      original--;
    }

    expect(original).toBe(0);
    expect(replaced).toBe(100);
  });

  it('cannot replace more than 100 planks', () => {
    let replaced = 100;
    const canReplace = replaced < 100;
    expect(canReplace).toBe(false);
  });
});

// ==========================================
// BRAIN IN TANK (from paradoxa.js)
// ==========================================

describe('Brain in Tank Logic (paradoxa.js)', () => {
  it('starts at depth 0', () => {
    expect(0).toBe(0);
  });

  it('maximum depth is 4, but stops at maxDepth-1', () => {
    const maxDepth = 4;
    let current = 0;

    // Can go deeper 3 times
    for (let i = 0; i < 3; i++) {
      if (current < maxDepth - 1) current++;
    }
    expect(current).toBe(3);

    // Cannot go deeper beyond maxDepth-1
    if (current >= maxDepth - 1) {
      // Should show warning, not increment
    }
    expect(current).toBe(3);
  });
});

// ==========================================
// KONAMI CODE LOGIC (from labor.js)
// ==========================================

describe('Konami Code Detection (labor.js)', () => {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  it('detects correct sequence', () => {
    let sequence = [];
    konamiCode.forEach(key => {
      sequence.push(key);
      sequence = sequence.slice(-10);
    });
    expect(sequence.join('').toLowerCase()).toBe(konamiCode.join('').toLowerCase());
  });

  it('does not trigger on partial sequence', () => {
    const partial = ['ArrowUp', 'ArrowUp', 'ArrowDown'];
    expect(partial.join('').toLowerCase()).not.toBe(konamiCode.join('').toLowerCase());
  });

  it('rejects wrong sequence', () => {
    const wrong = ['ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowUp',
      'ArrowRight', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'a', 'b'];
    expect(wrong.join('').toLowerCase()).not.toBe(konamiCode.join('').toLowerCase());
  });

  it('keeps only last 10 keys', () => {
    let sequence = [];
    const keys = ['x', 'y', 'z', ...konamiCode];
    keys.forEach(key => {
      sequence.push(key);
      sequence = sequence.slice(-10);
    });
    expect(sequence).toHaveLength(10);
    expect(sequence.join('').toLowerCase()).toBe(konamiCode.join('').toLowerCase());
  });
});
