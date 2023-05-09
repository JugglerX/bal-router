const fs = require("fs");
const path = require("path");
const { faker } = require("@faker-js/faker");
const slugify = require("slugify");

function generateFakeData(count) {
  const fakeData = [];

  for (let i = 0; i < count; i++) {
    const title = faker.helpers.unique(faker.commerce.productName);
    const stars = faker.datatype.number({ min: 1, max: 5 });
    const lastCommitOnDefaultBranch = faker.date.past().toISOString();
    const themeKey = slugify(title, { lower: true });
    const objectID = faker.datatype.uuid();
    const css = faker.helpers.arrayElement(["tailwind", "bootstrap", "scss"]);
    const ssg = faker.helpers.arrayElement(["react", "vue", "html"]);
    const categories = {
      css: [css],
      ssg: [ssg],
    };
    const createdAt = faker.date.recent().toISOString();

    fakeData.push({
      title,
      stars,
      lastCommitOnDefaultBranch,
      themeKey,
      objectID,
      categories,
      createdAt,
    });
  }

  return fakeData;
}

function convertToMarkdown(fakeData) {
  fakeData.forEach((data) => {
    const { title, stars, lastCommitOnDefaultBranch, themeKey, objectID, categories, createdAt } = data;

    const categoryMarkdown = Object.keys(categories)
      .map((category) => {
        const values = categories[category].map((value) => `- ${value}`).join("\n");
        return `  ${category}:\n    ${values}\n`;
      })
      .join("");

    const markdown = `---
title: ${title}
stars: ${stars}
lastCommitOnDefaultBranch: "${lastCommitOnDefaultBranch}"
themeKey: ${themeKey}
objectID: ${objectID}
categories:
${categoryMarkdown}
createdAt: "${createdAt}"
---
`;

    const filename = slugify(title, { lower: true }) + ".md";
    const filePath = path.resolve(process.cwd(), "data", "themes", filename);
    console.log(filePath);
    fs.writeFileSync(filePath, markdown);
    console.log(`File "${filePath}" saved.`);
  });
}

const fakeData = generateFakeData(200);
fs.rmdirSync("./data/themes/", { recursive: true });
fs.mkdirSync("./data/themes/", { recursive: true });
const dataString = JSON.stringify(fakeData, null, 2);
fs.writeFileSync("./test-data/fake-data.json", dataString);
console.log("Fake data saved to fake-data.json");
convertToMarkdown(fakeData);
