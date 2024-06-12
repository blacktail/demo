// 第一套题目：实现一个电商产品处理系统
// 设计一个函数 processProductData，接受一个包含多个产品对象的数组，并实现以下功能：

// 功能实现：
// groupByCategory(data)：根据不同的分类对产品进行分组。
// sortByPrice(data)：对每个分类内的产品按价格进行降序排列。
// filterByMinPrice(data, minPrice)：过滤掉价格低于某个值的产品。
// calculateMedianPrice(data)：计算每个分类内的产品价格中位数。
// processProductData(data, minPrice)：综合上述功能处理产品数据。
// 编写以上3个函数的对应 unit-test。
// 要点：
// 使用 Map 和 Set 等高级数据结构来优化处理过程。
// 返回处理后的结果，包括分组后的产品数组、过滤后的产品数组、每个分类的价格中位数。

interface Product {
  id: number;
  price: number;
  category: string;
  name: string;
  discount: number;
}

function groupByCategory(products: Product[]) {
  const groupByResults: Record<string, Product[]> = {};

  products.forEach((product) => {
    if (!groupByResults[product.category]) {
      groupByResults[product.category] = [];
    }

    groupByResults[product.category].push(product);
  });

  return groupByResults;
}

function calculateMedianPrice(sortedProducts: Product[]) {
  const length = sortedProducts.length;

  if (length === 0) {
    return 0;
  } else if (length === 1) {
    return sortedProducts[0].price;
  } else if (length % 2 === 0) {
    const p1 = sortedProducts[length / 2];
    const p2 = sortedProducts[length / 2 - 1];

    return (p1.price + p2.price) / 2;
  } else {
    const p = sortedProducts[Math.floor(length / 2)];

    return p.price;
  }
}

function sortByPrice(products: Product[]) {
  // Sort by desc order
  products.sort((p1, p2) => {
    if (p1.price < p2.price) {
      return 1;
    } else if (p1.price > p2.price) {
      return -1;
    } else {
      return 0;
    }
  });
}

function filterByMinPrice(products: Product[], minPrice: number) {
  return products.filter((p) => {
    return p.price >= minPrice;
  });
}

export function processProductData(products: Product[], minPrice: number) {
  const groupByResults = groupByCategory(products);
  const newResults: Record<string, Product[]> = {};
  const medianPrices: Record<string, number> = {};

  Object.keys(groupByResults).forEach((category) => {
    sortByPrice(groupByResults[category]);

    newResults[category] = filterByMinPrice(groupByResults[category], minPrice);
    medianPrices[category] = calculateMedianPrice(newResults[category]);
  });

  return {
    groupByResults,
    filteredGroupResults: newResults,
    medianPrices,
  };
}

// 1. 去重
// 实现至少两种数组去重方法，并评价其性能。

// 2. 懒加载
// 请编写一个简单的图片懒加载函数 lazyLoadImages。当图片滚动到视窗内时，从 data-src 属性中加载图片。为简化问题，假设所有需要懒加载的图片都具有类 .lazy。请使用原生 JavaScript 实现。

// 3. 节流
// 实现一个节流函数，确保函数在指定的时间间隔内只执行一次，防止频繁触发。

// function  lazyLoadImages() {
//   window.addEventListener('scroll', debounce(() => {
//     const needLazyLoadImgs = document.getElementsByClassName('lazy') as HTMLImageElement[];

//     // Method 1
//     needLazyLoadImgs(img => {
//       if (!img.src) {

//       img bounding React, viewport ResizeObserverSize,
//       //
//       if (inViewport) {
//         img.src = img.attr('data-src');
//       }
//       }

//     })

//     //
//     // anchor element, position: fixed
//     //

//     // css,

//   }, 200));
// }
