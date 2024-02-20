export function generator(svg_ast: any) {
  function createAttrString(attr: any) {
    return Object.keys(attr)
      .map(function (key) {
        return key + '="' + attr[key] + '"';
      })
      .join(" ");
  }
  const svg_attr = createAttrString(svg_ast.attr);
  const elements = svg_ast.body
    .map((i: any) => {
      return `<${i.tag} ${createAttrString(i.attr)}></${i.tag}>`;
    })
    .join("\n\t");

  return `<svg ${svg_attr}>${elements}</svg>`;
}
