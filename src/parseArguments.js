export default function(args) {
  // if the first arg is an array, assume JS tagged template literal form
  if (Array.isArray(args[0])) {
    const [strings, ...interpolations] = args;
    return { strings, interpolations };

    // if the first arg is a string, assume CLJS form
  } else if (typeof args[0] === "string") {
    return args.reduce(
      (acc, item, i) => {
        if (i % 2 === 0) {
          acc.strings.push(item);
        } else {
          acc.interpolations.push(item);
        }
        return acc;
      },
      { strings: [], interpolations: [] }
    );
  } else {
    console.error(
      `Invalid arguments passed to styled: ${JSON.stringify(args)}`
    );
    return { strings: [], interpolations: [] };
  }
}
