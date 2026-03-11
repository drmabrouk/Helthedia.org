import { describe, it, expect } from 'vitest';
import { mockPapers } from '../lib/data';

describe('Search Logic', () => {
  it('should filter papers by query', () => {
    const query = 'mRNA';
    const filtered = mockPapers.filter(paper =>
      paper.title.toLowerCase().includes(query.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(query.toLowerCase())
    );
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every(p => p.title.includes('mRNA') || p.abstract.includes('mRNA'))).toBe(true);
  });

  it('should filter papers by study type', () => {
    const selectedTypes = ['Clinical Trial'];
    const filtered = mockPapers.filter(paper => selectedTypes.includes(paper.type));
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every(p => p.type === 'Clinical Trial')).toBe(true);
  });

  it('should filter papers by year', () => {
    const selectedYears = [2023];
    const filtered = mockPapers.filter(paper => selectedYears.includes(paper.year));
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every(p => p.year === 2023)).toBe(true);
  });

  it('should sort papers by date', () => {
    const results = [...mockPapers];
    results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    for (let i = 0; i < results.length - 1; i++) {
      const current = new Date(results[i].date).getTime();
      const next = new Date(results[i+1].date).getTime();
      expect(current).toBeGreaterThanOrEqual(next);
    }
  });
});
