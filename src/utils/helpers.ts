export function formatCatNames(cats: any[]): string {
  const catNames = cats.map(cat => cat.name);
  return catNames.length > 1
    ? `${catNames.slice(0, -1).join(', ')} and ${catNames.slice(-1)}`
    : catNames[0];
}

export function calculateTotalPrice(cats: any[], pouchPrices: Record<string, number>): number {
  return cats
    .filter(cat => cat.subscriptionActive)
    .reduce((total, cat) => {
      const price = pouchPrices[cat.pouchSize];
      return total + price;
    }, 0);
}