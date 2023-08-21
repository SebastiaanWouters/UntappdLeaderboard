import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('postcss-preset-env').Config} */
const config = {
	plugins: [postcssPresetEnv()]
};

export default config;
