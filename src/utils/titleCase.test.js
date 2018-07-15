import titleCase from './titleCase'

test('Title Case works', () => {
  const str = ` acute aNgle-glaucoma trauma    `
  const result = `Acute Angle-Glaucoma Trauma`
  expect(titleCase(str)).toBe(result);
});