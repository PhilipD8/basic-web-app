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

    const words = query.toLowerCase().trim().split(/\s+/);
    const plusIndex = words.indexOf("plus");

    if (plusIndex <= 0 || plusIndex >= words.length - 1){
      return "";
    }

    const raw1 = words[plusIndex - 1];
    const raw2 = words[plusIndex + 1];

    const clean1 = Number(raw1.replace(/[^\d.-]/g, ""));
    const clean2 = Number(raw2.replace(/[^\d.-]/g, ""));  

    return String(clean1 + clean2);
  }
}
