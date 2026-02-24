export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "philipda";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "philipda";
  }

  if (query.toLowerCase().includes("plus")) {
    const words = query.toLowerCase().split(" ");
    const plusIndex = words.indexOf("plus");
    const num1 = Number(words[plusIndex - 1]);
    const num2 = Number(words[plusIndex + 1]);
    return String(num1 + num2);
  }

  return "";
}
