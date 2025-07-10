let users = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

function getAll() {
  return users;
}

function getById(id) {
  return users.find(u => u.id === id);
}

function create(user) {
  const newUser = { id: Date.now(), ...user };
  users.push(newUser);
  return newUser;
}

function update(id, data) {
  const user = users.find(u => u.id === id);
  if (!user) return null;
  Object.assign(user, data);
  return user;
}

function remove(id) {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

function reset() {
  users = [
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
  ];
}

module.exports = { getAll, getById, create, update, remove, reset };
