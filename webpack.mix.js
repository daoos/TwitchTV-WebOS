let mix = require('laravel-mix')
let webpack = require('webpack')
let LiveReloadPlugin = require('webpack-livereload-plugin')
let path = require('path')

mix.webpackConfig({
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			// assigning to window is bad, but then owl caorusel wont work
			'window.jQuery': 'jquery',
			'window.$': 'jquery'
		})
		// new LiveReloadPlugin()
	],
	module: {
		rules: [      {
			test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015'
			}
			// {
			//     test: /\.css$/,
			//     loader: "style-loader!css-loader"
			// }
		]

	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src/js')
		]
	},
	devtool: mix.inProduction() ? false : '#inline-source-map'
})

mix.config = {
	// processCssUrls: false,
	sourcemaps: !mix.inProduction(),
	hmr: false, // !mix.inProduction(),
	notifications: {
		onSuccess: !mix.inProduction(),
		onFailure: !mix.inProduction()
	}
}

mix.js('src/js/app.js', 'dist/js')
	.sass('src/sass/app.scss', 'dist/css')
	.setPublicPath('./')
	// .disableNotifications()
	// .copy('node_modules/font-awesome/fonts', 'public/fonts')
	// .minify()

if (mix.inProduction()) {
	mix.version()
}

if (!mix.inProduction()) {
	mix.sourceMaps()
	mix.browserSync({proxy: 'localhost:8080'})
}
