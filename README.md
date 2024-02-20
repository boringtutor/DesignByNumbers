# sbn

A compiler for small drawing language sbn(SVG by Numbers). Inspired by John Maeda's book: Design by Numbers.

## Supported Keywords

This compiler is work-in-progress. Here is a list of commands currently supported (v0.4.3) & planning to implement. (sbn language specification is compatible with Design by Numbers chapter 1 - 12)

- [x] `Paper`
- [x] `Pen`
- [x] `Line`
- [x] `// comment`
- [x] `Set` (variable)
- [x] `{ }` (block)
- [ ] Nested block
- [ ] `Repeat`
- [ ] `(+ - / *)` (calculations)
- [x] `[x, y]` (dot)
- [ ] Copy Dots (calculation on dot)
- [ ] `Same ? / NotSame?` (question)
- [ ] `Smaller ? / NotSmaller?` (question)
- [ ] `Command` (function)
- [ ] `Load` (import)


## License

Copyright 2016 Mariko Kosaka

Code licensed under the [Apache-2.0 License](http://www.apache.org/licenses/LICENSE-2.0)
Documentation licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) 
