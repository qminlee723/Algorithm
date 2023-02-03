function solution(spell, dic) {
  spell = spell.sort().join("");

  let dictionary = dic
    .map((a) => [...a].sort().join(""))
    .find((e) => e === spell);

  if (dictionary !== undefined) {
    return 1;
  }
  return 2;
}
