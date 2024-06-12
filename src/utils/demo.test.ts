import { expect, test } from 'vitest';
import { processProductData } from './demo';
import { products } from './demoData';

test('processProductData', () => {
  const minPrice = 100;
  const results = processProductData(products, minPrice);
  expect(Object.keys(results.groupByResults)).toContain('Electronics');
});
