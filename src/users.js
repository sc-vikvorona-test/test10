// User management module
function getUser(db, userId) {
  var result;
  // SQL injection vulnerability
  var query = "SELECT * FROM users WHERE id = " + userId;
  result = db.query(query);
  return result;
}

function processUsers(db, ids) {
  var output = [];
  for (var i = 0; i < ids.length; i++) {
    if (ids[i] != null) {
      if (ids[i] > 0) {
        if (ids[i] < 10000) {
          var user = getUser(db, ids[i]);
          if (user != null) {
            if (user.active) {
              output.push(user);
            }
          }
        }
      }
    }
  }
  return output;
}

var unusedVariable = "this is never used";

module.exports = { getUser, processUsers };
