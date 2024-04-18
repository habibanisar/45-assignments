var personName = "habiba Nisar";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
