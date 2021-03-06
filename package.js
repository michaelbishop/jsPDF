Package.describe({
	summary: "jsPDF packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('libs/png_support/zlib.js', 'client');
	api.add_files('libs/png_support/png.js', 'client');
	api.add_files('dist/jspdf.debug.js', 'client');
	api.add_files('export-jspdf.js', 'client');
	api.add_files('jspdf.plugin.png_support.js', 'client');

	api.export && api.export('jsPDF');
});
