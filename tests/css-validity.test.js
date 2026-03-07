/**
 * Test: CSS Validity
 * Verifies CSS files exist, are non-empty, and have balanced braces/syntax.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const cssDir = join(__dirname, '..', 'assets', 'css');
const cssFiles = readdirSync(cssDir).filter(f => f.endsWith('.css'));

describe('CSS File Existence', () => {
  it('CSS directory contains files', () => {
    expect(cssFiles.length).toBeGreaterThan(0);
  });

  it('main.css exists', () => {
    expect(cssFiles).toContain('main.css');
  });
});

describe('CSS Syntax Checks', () => {
  cssFiles.forEach(file => {
    describe(file, () => {
      const content = readFileSync(join(cssDir, file), 'utf-8');

      it('is non-empty', () => {
        expect(content.trim().length).toBeGreaterThan(0);
      });

      it('has balanced curly braces', () => {
        let depth = 0;
        for (const char of content) {
          if (char === '{') depth++;
          if (char === '}') depth--;
          // Depth should never go negative
          expect(depth).toBeGreaterThanOrEqual(0);
        }
        expect(depth).toBe(0);
      });

      it('has no unclosed comments', () => {
        const opens = (content.match(/\/\*/g) || []).length;
        const closes = (content.match(/\*\//g) || []).length;
        expect(opens).toBe(closes);
      });

      it('contains valid CSS rules (has selectors and properties)', () => {
        // At minimum, should have at least one rule with a property
        expect(content).toMatch(/[{]\s*[\w-]+\s*:/);
      });
    });
  });
});

describe('CSS Design System (main.css)', () => {
  const mainCss = readFileSync(join(cssDir, 'main.css'), 'utf-8');

  it('defines primary background color variable', () => {
    expect(mainCss).toMatch(/--primary-bg/);
  });

  it('defines accent color variable', () => {
    expect(mainCss).toMatch(/--accent-color/);
  });

  it('contains responsive media queries', () => {
    expect(mainCss).toMatch(/@media/);
  });
});
