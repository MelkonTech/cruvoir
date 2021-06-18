const values = {}
export default {get: name => values[name], set: (name, value) => { values[name] = value }}
