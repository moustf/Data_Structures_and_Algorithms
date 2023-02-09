// ! Time complexity: O(n.m), Space Complexity: O(n.m).

function distinctNames(ideas: string[]): number {
  let res = 0;
  let initGroup = new Set<string>();

  // ? Grouping ideas by their initials.
  for (let i = 0; i < 26; i++) {
    initGroup[i] = new Set<string>();
  }
  for (const idea of ideas) {
    // ? Getting char codes and subtracting 97 from them is for arranging the suffices alphabetically.
    initGroup[idea.charCodeAt(0) - 97].add(idea.substring(1));
  }

  // ? Calculate the number of valid names from every pair of groups.
  for (let i = 0; i < 25; i++) {
    for (let j = i + 1; j < 26; j++) {
      // ? Get the number of mutual suffixes.
      let numOfMutuals = 0;
      for (const ideaA of initGroup[i]) {
        if (initGroup[j].has(ideaA)) numOfMutuals += 1;
      }

      res += 2 * (initGroup[i].size - numOfMutuals) * (initGroup[j].size - numOfMutuals);
    }
  }

  return res;
};
