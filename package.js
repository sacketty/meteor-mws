Package.describe({
  summary: "Port of Marketplace web services to meteor. based on mws-js Npm module"
});

Package.on_use(function (api) {
  api.use(['underscore','xml2js'], ['server']);

  api.export(['AmazonMws']);

  api.add_files(['lib/mws.js','lib/fba.js', 'lib/feeds.js',
    'lib/orders.js', 'lib/products.js', 'lib/reports.js',
    'lib/sellers.js'
    ], 'server');
});
