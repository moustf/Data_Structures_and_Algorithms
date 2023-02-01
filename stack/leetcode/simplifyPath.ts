function simplifyPath(path: string): string {
  const stack: string[] = ["/"];
  const splited = path.split("/").filter((dir) => dir !== "" && dir !== ".");

  for (let m = 0; m < splited.length; m++) {
    const dir = splited[m];

    if (dir === "..") {
      stack.length > 1 && stack.pop();
    } else {
      stack.length === 1
        ? stack.push(splited[m].replace(/\//g, ""))
        : stack.push(`/${splited[m].replace(/\//g, "")}`);
    }
  }

  console.log(stack);
  return stack.join("");
}
