function emojifyTextCliAsync(input) {
  if (typeof input !== 'string') {
    return Promise.reject(new TypeError(`\input\` should be \`String\`, got \`${typeof input}\``));
  }
  return Promise.resolve(input);
}

function emojifyTextCli(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`\input\` should be \`String\`, got \`${typeof input}\``);
  }
  return input;
}

export { emojifyTextCli, emojifyTextCliAsync };
