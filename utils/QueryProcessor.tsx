export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "lsharma";
  }

  if (query.toLowerCase().includes("andrew")) {
    return "lsharma";
  }

  const q = query.toLowerCase();
  
  // Match numbers connected by "plus"
  const matches = q.match(/\d+/g);

  if (matches && q.includes("plus")) {
    const sum = matches
      .map(Number)
      .reduce((a, b) => a + b, 0);

    return sum.toString();
  }



  return "";
}
