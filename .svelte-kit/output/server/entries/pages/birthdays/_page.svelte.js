import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: "span.svelte-57f94b{display:inline-block;width:100px}",
  map: null
};
const Birthday = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { dob } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.dob === void 0 && $$bindings.dob && dob !== void 0)
    $$bindings.dob(dob);
  $$result.css.add(css$1);
  return `<span class="svelte-57f94b"><strong>${escape(name)}</strong></span> <span class="svelte-57f94b">${escape(dob)}</span>`;
});
const css = {
  code: "ol.svelte-112mx3n{list-style-type:none;padding-left:0}li.svelte-112mx3n{padding:10px;margin:5px;border:1px solid #ccc;border-radius:2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-l2gpsr">Birthday list</h1> <ol class="svelte-112mx3n">${each(data.birthdays, (birthday) => {
    return `<li class="svelte-112mx3n">${validate_component(Birthday, "Birthday").$$render($$result, Object.assign({}, birthday), {}, {})} </li>`;
  })} </ol>`;
});
export {
  Page as default
};
