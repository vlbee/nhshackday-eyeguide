import deletePTag from './deletePTag'

test('P converts to Li', () => {
  const html = `<ul>
  <li><a href="/guidelines/adnexal/Entropion/#key-advice">KEY ADVICE</a></li>
  <li>
  <p><a href="/guidelines/adnexal/Entropion/#management">MANAGEMENT</a></p>
  <ul>
  <li><a href="/guidelines/adnexal/Entropion/#immediate">IMMEDIATE</a></li>
  <li><a href="/guidelines/adnexal/Entropion/#reassess--60-min">REASSESS @ 60 MIN</a></li>
  </ul>
  </li>
  <p><a href="/guidelines/adnexal/Entropion/#management">MANAGEMENT</a></p>
  <li><a href="/guidelines/adnexal/Entropion/#caution">CAUTION</a></li>
  </ul>`
  const newHtml = `<ul>
  <li><a href="/guidelines/adnexal/Entropion/#key-advice">KEY ADVICE</a></li>
  <li>
  <a href="/guidelines/adnexal/Entropion/#management">MANAGEMENT</a>
  <ul>
  <li><a href="/guidelines/adnexal/Entropion/#immediate">IMMEDIATE</a></li>
  <li><a href="/guidelines/adnexal/Entropion/#reassess--60-min">REASSESS @ 60 MIN</a></li>
  </ul>
  </li>
  <a href="/guidelines/adnexal/Entropion/#management">MANAGEMENT</a>
  <li><a href="/guidelines/adnexal/Entropion/#caution">CAUTION</a></li>
  </ul>`
  expect(deletePTag(html)).toBe(newHtml);
});