/**
 * Test: JavaScript Syntax Validity
 * Verifies all JS modules can be parsed without syntax errors.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const jsDir = join(__dirname, '..', 'assets', 'js');
const jsFiles = readdirSync(jsDir).filter(f => f.endsWith('.js'));

describe('JavaScript Syntax Validity', () => {
  jsFiles.forEach(file => {
    it(`${file} has valid JavaScript syntax`, () => {
      const content = readFileSync(join(jsDir, file), 'utf-8');
      expect(content.length).toBeGreaterThan(0);

      // Attempt to parse - will throw SyntaxError if invalid
      // We wrap in a function body since files use top-level statements
      expect(() => {
        new Function(content);
      }).not.toThrow(SyntaxError);
    });
  });

  it('all 16 JS modules are present', () => {
    const expected = [
      'compass-nav.js', 'forschung.js', 'homepage-engagement.js',
      'kollektiv.js', 'kompass.js', 'labor.js', 'main.js',
      'mensch-ki.js', 'mobile-nav.js', 'moment-der-stille.js',
      'natur.js', 'navigation-intelligence.js', 'paradoxa.js',
      'particles.js', 'reise.js', 'salon.js'
    ];
    expected.forEach(file => {
      expect(jsFiles).toContain(file);
    });
  });
});
