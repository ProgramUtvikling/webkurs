({
    baseUrl: "scripts",       // Defaults to . (current directory)
    exclude: ["grapnel"],
    mainConfigFile: "scripts/main.js",
    name: "Main",                 // Name of .js-file to be optimized
    out: "main-opt.js",           // The output file (optimized script)
    optimize: "none"              // Skips minification to speed up builds
})
