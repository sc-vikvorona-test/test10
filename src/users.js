// User management module
function getUser(db, userId) {
  const query = "SELECT * FROM users WHERE id = ?";
  return db.query(query, [userId]);
}

function processUsers(db, ids) {
  return ids
    .filter(id => id != null && id > 0 && id < 10000)
    .map(id => getUser(db, id))
    .filter(user => user != null && user.active);
}

module.exports = { getUser, processUsers };
