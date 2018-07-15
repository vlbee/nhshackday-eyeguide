import titleCase from './titleCase'

test('Title Case works', () => {
  const str = ` acute aNgle-glaucoma `
  const result = `Acute Angle-Glaucoma`
  expect(titleCase(str)).toBe(result);
});