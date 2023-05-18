import { c as create_ssr_component, d as each, f as add_attribute } from "../../chunks/index2.js";
function* iter_range(begin2, end2, step2) {
  step2 = step2 ? step2 : 1;
  if (typeof end2 === "undefined") {
    end2 = begin2 > 0 ? begin2 : 0;
    begin2 = begin2 < 0 ? begin2 : 0;
  }
  if (begin2 == end2) {
    return;
  }
  if (begin2 > end2) {
    step2 = step2 * -1;
  }
  for (let x = begin2; x < end2; x += step2) {
    yield x;
  }
}
function range(begin2, end2, step2) {
  return Array.from(iter_range(begin2, end2, step2));
}
let begin = 0;
let end = 14;
let step = 1;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(range(begin, end, step), (i) => {
    return `<img${add_attribute("src", `${i}.png`, 0)} alt="01">`;
  })}`;
});
export {
  Page as default
};
