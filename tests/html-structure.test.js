/**
 * Test: HTML Structure Validity
 * Verifies all HTML pages have proper structure and required elements.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { JSDOM } from 'jsdom';

const root = join(__dirname, '..');

const htmlPages = [
  'index.html',
  'pages/labor.html',
  'pages/paradoxa.html',
  'pages/mensch-ki.html',
  'pages/kompass.html',
  'pages/forschung.html',
  'pages/kollektiv.html',
  'pages/salon.html',
  'pages/natur.html',
  'pages/reise.html',
  'pages/between-the-moments.html',
  'pages/die-ankunft.html',
  'pages/werkstatt.html',
  'pages/datenschutz.html',
  'pages/impressum.html',
  'pages/triad/index.html',
  'pages/triad/empfang.html',
  'pages/triad/portal.html',
  'pages/triad/dokumentation.html',
  'pages/disc/beamer.html',
  'pages/disc/moderator.html',
  'pages/disc/teilnehmer.html',
  'interactives/unendlichkeit.html',
];

describe('HTML File Existence', () => {
  htmlPages.forEach(page => {
    it(`${page} exists`, () => {
      expect(existsSync(join(root, page))).toBe(true);
    });
  });
});

describe('HTML Structure', () => {
  htmlPages.forEach(page => {
    const filePath = join(root, page);
    if (!existsSync(filePath)) return;

    const content = readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;

    describe(page, () => {
      it('has DOCTYPE declaration', () => {
        expect(content.trim().toLowerCase()).toMatch(/^<!doctype html>/);
      });

      it('has <html> with lang attribute', () => {
        const html = doc.querySelector('html');
        expect(html).not.toBeNull();
        expect(html.getAttribute('lang')).toBeTruthy();
      });

      it('has <head> section', () => {
        expect(doc.querySelector('head')).not.toBeNull();
      });

      it('has <title> tag', () => {
        const title = doc.querySelector('title');
        expect(title).not.toBeNull();
        expect(title.textContent.trim().length).toBeGreaterThan(0);
      });

      it('has charset meta tag', () => {
        const charset = doc.querySelector('meta[charset]');
        expect(charset).not.toBeNull();
      });

      it('has viewport meta tag', () => {
        const viewport = doc.querySelector('meta[name="viewport"]');
        expect(viewport).not.toBeNull();
      });

      it('has <body> section', () => {
        expect(doc.querySelector('body')).not.toBeNull();
      });
    });
  });
});
