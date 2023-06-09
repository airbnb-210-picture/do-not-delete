import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15];
  return `<p>feel free to check the timeline</p>

${each(imgs, (i) => {
    return `<p>${escape(i)}</p>
    <img${add_attribute("src", `${i}.png`, 0)}${add_attribute("alt", `${i}`, 0)}>
    <br>`;
  })}

<h1><pre> 
        Overall, the host is able to 
            1. accept rent immediately, ignore
            2. your question
            3. Refuse to help

        The reason I stay for second time, it is 
        simply Airbnb offer a good deal, and I 
        think I can bear with it. I was def wrong.
    </pre></h1>`;
});
export {
  Page as default
};
