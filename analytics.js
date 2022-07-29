const measureWithRunFunc = (func, args, name = "unknown") => {
  var start = Date.now();
  const result = func.apply({}, args);
  var duration = Date.now() - start;
  console.log("finished running of " + name + "!");
  console.log("Result: ", result);
  console.log("took " + duration * 1000000 + " micros");
};

module.exports = measureWithRunFunc;
