export const buildTree = (items: any[], parent?: any): any[] => {
  parent = parent || null;
  const result = [];

  items.forEach(item => {
    if (item.parent === parent) {
      // @ts-ignore
      result.push(item);
      item.children = buildTree(items, item.id);

      if (!item.children.length) {
        delete item.children;
      }
    }
  });

  return result;
};
