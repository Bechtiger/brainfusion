/**
 * Test: Link Integrity & Cross-References
 * Verifies internal links between pages and asset references.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { JSDOM } from 'jsdom';

const root = join(__dirname, '..');

// Collect all HTML files
function collectHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      collectHtmlFiles(full, files);
    } else if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = collectHtmlFiles(root);

describe('Internal Link Integrity', () => {
  htmlFiles.forEach(filePath => {
    const relPath = filePath.replace(root + '/', '');
    const content = readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;
    const fileDir = dirname(filePath);

    const links = doc.querySelectorAll('a[href]');
    const internalLinks = Array.from(links)
      .map(a => a.getAttribute('href'))
      .filter(href =>
        href &&
        !href.startsWith('http') &&
        !href.startsWith('//') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:') &&
        !href.startsWith('#') &&
        !href.startsWith('javascript:')
      );

    if (internalLinks.length > 0) {
      describe(`${relPath} internal links`, () => {
        internalLinks.forEach(href => {
          it(`link to "${href}" resolves to existing file`, () => {
            const cleanHref = href.split('?')[0].split('#')[0];
            const target = join(fileDir, cleanHref);
            expect(existsSync(target), `Missing: ${target}`).toBe(true);
          });
        });
      });
    }
  });
});

describe('CSS Asset References', () => {
  htmlFiles.forEach(filePath => {
    const relPath = filePath.replace(root + '/', '');
    const content = readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;
    const fileDir = dirname(filePath);

    const cssLinks = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'))
      .map(link => link.getAttribute('href'))
      .filter(href => href && !href.startsWith('http') && !href.startsWith('//'));

    if (cssLinks.length > 0) {
      describe(`${relPath} CSS references`, () => {
        cssLinks.forEach(href => {
          it(`stylesheet "${href}" exists`, () => {
            const cleanHref = href.split('?')[0];
            const target = join(fileDir, cleanHref);
            expect(existsSync(target), `Missing CSS: ${target}`).toBe(true);
          });
        });
      });
    }
  });
});

describe('JavaScript Asset References', () => {
  htmlFiles.forEach(filePath => {
    const relPath = filePath.replace(root + '/', '');
    const content = readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;
    const fileDir = dirname(filePath);

    const scripts = Array.from(doc.querySelectorAll('script[src]'))
      .map(s => s.getAttribute('src'))
      .filter(src =>
        src &&
        !src.startsWith('http') &&
        !src.startsWith('//') &&
        !src.includes('supabase')
      );

    if (scripts.length > 0) {
      describe(`${relPath} JS references`, () => {
        scripts.forEach(src => {
          it(`script "${src}" exists`, () => {
            const cleanSrc = src.split('?')[0];
            const target = join(fileDir, cleanSrc);
            expect(existsSync(target), `Missing JS: ${target}`).toBe(true);
          });
        });
      });
    }
  });
});

describe('Image References', () => {
  htmlFiles.forEach(filePath => {
    const relPath = filePath.replace(root + '/', '');
    const content = readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(content);
    const doc = dom.window.document;
    const fileDir = dirname(filePath);

    const images = Array.from(doc.querySelectorAll('img[src]'))
      .map(img => img.getAttribute('src'))
      .filter(src => src && !src.startsWith('http') && !src.startsWith('//') && !src.startsWith('data:'));

    if (images.length > 0) {
      describe(`${relPath} image references`, () => {
        images.forEach(src => {
          it(`image "${src}" exists`, () => {
            const cleanSrc = src.split('?')[0];
            const target = join(fileDir, cleanSrc);
            expect(existsSync(target), `Missing image: ${target}`).toBe(true);
          });
        });
      });
    }
  });
});
