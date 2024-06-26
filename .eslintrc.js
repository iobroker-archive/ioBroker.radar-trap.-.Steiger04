module.exports = {
	root: true,
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		project: "./tsconfig.json",
	},
	extends: [
		"plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		"plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	plugins: [],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-use-before-define": [
			"error",
			{
				functions: false,
				typedefs: false,
				classes: false,
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-object-literal-type-assertion": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-non-null-assertion": "off", // This is necessary for Map.has()/get()!
		"@typescript-eslint/no-inferrable-types": [
			"error",
			{
				ignoreProperties: true,
				ignoreParameters: true,
			},
		],
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{
				"ts-expect-error": false,
				"ts-ignore": true,
				"ts-nocheck": true,
				"ts-check": false,
			},
		],
		"@typescript-eslint/restrict-template-expressions": [
			"error",
			{
				allowNumber: true,
				allowBoolean: true,
				// This is necessary to log errors
				// TODO: Consider switching to false when we may annotate catch clauses
				allowAny: true,
				allowNullish: true,
			},
		],
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: false,
			},
		],
		// We can turn this on from time to time but in general these rules
		// make our lives harder instead of easier
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unsafe-call": "off",

		// Although this rule makes sense, it takes about a second to execute (and we don't need it)
		"@typescript-eslint/no-implied-eval": "off",

		"@typescript-eslint/explicit-module-boundary-types": ["warn", { allowArgumentsExplicitlyTypedAsAny: true }],
		"@typescript-eslint/no-this-alias": "off",
	},
	overrides: [
		{
			files: ["*.test.ts"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": "off",
			},
		},
	],
};
