var configValues = require('./config');

module.exports = {

      getDbConnectionString: function() {
          return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@node-todo-r3tg3.mongodb.net/test?retryWrites=true&w=majority';
      }

}
