const allCategories = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(element => {
    console.log(`\nCategory: ${element.firstElementChild.textContent}`)
    const allCategoryElements = element.querySelectorAll('li');
    console.log(`Elements: ${allCategoryElements.length}`)
});