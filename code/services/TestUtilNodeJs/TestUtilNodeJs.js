function TestUtilNodeJs(req, resp) {
  const util = UtilNodeJs();
  log(util.format('%s is at %s', 'foo', 'bar')); // 'foo is at bar'
  resp.success('Success');
}


