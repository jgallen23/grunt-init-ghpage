
exports.description = 'ghpage scaffold';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({ type: 'ghpage' }, [
  ], function(err, props) {

    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();
  });
};
