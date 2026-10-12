const storeKey = "nuwa-cmc-done";
const done = new Set(JSON.parse(localStorage.getItem(storeKey) || "[]"));

const views = {
  home: renderHome,
  knowledge: () => renderList("知识梳理", "每一条都先看例子，再展开证明。会写第一行，比背定理有用。", KNOWLEDGE, "know"),
  methods: () => renderList("题型与套路", "按得分顺序排：填空、计算、证明。", METHODS, "method"),
  papers: renderPapers,
  drills: renderDrills,
  mocks: renderMocks
};

const nav = document.querySelector("#nav");
const main = document.querySelector("#main");
const search = document.querySelector("#search");

nav.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  show(button.dataset.view);
});
search.addEventListener("input", () => show(current()));

function current() {
  return document.querySelector("#nav button.active")?.dataset.view || "home";
}

function show(view) {
  for (const button of nav.querySelectorAll("button")) {
    button.classList.toggle("active", button.dataset.view === view);
  }
  views[view]();
  if (window.renderMathInElement) {
    renderMathInElement(main, {
      delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }
}

function renderHome() {
  main.innerHTML = `
    <section class="hero">
      <p class="kicker">非数学 A 类 · 理工</p>
      <h1>女娲补天</h1>
      <p>大一学过高等数学和线性代数，现在看着熟、写不出来。这个页面按初赛真正计分的动作来补：先会写极限、求导、积分和微分方程，再处理曲线曲面积分和证明。</p>
      <div class="grid">
        <div class="stat"><b>初赛只考高数</b><span>2026 年 11 月 14 日，9:00–11:30，150 分钟，100 分。</span></div>
        <div class="stat"><b>填空 30 分</b><span>5 道各 6 分。没有过程分，先把这 30 分写成习惯。</span></div>
        <div class="stat"><b>线代先放下</b><span>只在决赛约占 20%。确认进入决赛再写。</span></div>
      </div>
    </section>
    <h2 class="section-title">怎么用</h2>
    <article class="card">
      <p>历年题的题干按组委会公布的试卷原文写，没有改写。提示、要点、易错和解答是为了把“看懂”变成“写得出”。</p>
      <p>建议顺序：套路里的四周安排 → 第十七届填空 → 专题里写错的类型 → 第十六届整卷限时 → 模拟卷一。</p>
      <p class="small">已逐页核对题干的是第十五、十六、十七届初赛，以及第十六届决赛的五道填空。第十三、十四届和决赛大题仍以你下载文件夹里的原卷 PDF 为准，避免把没核对清的句子写进题干。</p>
    </article>`;
}

function matches(text) {
  const q = search.value.trim();
  return !q || text.includes(q);
}

function renderList(title, lead, items, prefix) {
  const cards = items.filter((item) => matches(`${item.title}${item.summary}${item.body}`)).map((item) => cardHTML({
    id: `${prefix}-${item.id}`,
    title: item.title,
    tags: [item.tag],
    body: `<p>${item.summary}</p><p>${item.body}</p>`,
    blocks: [
      item.example && ["例子", `<p>${item.example}</p>`],
      item.proof && ["展开：为什么这样写", `<p>${item.proof}</p>`],
      item.steps && ["步骤", `<ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol>`]
    ].filter(Boolean)
  })).join("");
  main.innerHTML = `<h2 class="section-title">${title}</h2><p class="lead">${lead}</p>${cards || empty()}`;
}

function renderPapers() {
  const html = PAPERS.map((paper) => {
    const problems = paper.problems.filter((item) => matches(`${paper.title}${item.title}${item.stem}`)).map((item) => problemHTML(item)).join("");
    if (!problems) return "";
    return `<h2 class="section-title">${paper.title}</h2><p class="lead">${paper.meta}</p>${problems}`;
  }).join("");
  main.innerHTML = html || empty();
}

function renderDrills() {
  const html = DRILLS.map((group) => {
    const problems = group.problems.filter((item) => matches(`${group.title}${item.stem}`)).map((item) => problemHTML(item)).join("");
    if (!problems) return "";
    return `<h2 class="section-title">${group.title}</h2>${problems}`;
  }).join("");
  main.innerHTML = `<p class="lead">专题题是按近年题型新写的，用来在看完原题之后马上再写一道。</p>${html || empty()}`;
}

function renderMocks() {
  const html = MOCKS.map((paper) => {
    const problems = paper.problems.filter((item) => matches(item.stem)).map((item) => problemHTML(item)).join("");
    if (!problems) return "";
    return `<h2 class="section-title">${paper.title}</h2><p class="lead">${paper.meta}</p>${problems}`;
  }).join("");
  main.innerHTML = html || empty();
}

function problemHTML(item) {
  return cardHTML({
    id: item.id,
    title: item.title,
    tags: [`${item.score} 分`],
    body: `<div class="stem">${item.stem}</div>`,
    blocks: [
      ["提示", `<p>${item.hint}</p>`],
      ["要点", `<p>${item.points}</p>`],
      ["易错", `<p>${item.traps}</p>`],
      ["答案", `<div class="answer">${item.answer}</div>`],
      ["解答", item.solution]
    ]
  });
}

function cardHTML({ id, title, tags, body, blocks }) {
  const tagHTML = (tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");
  const detail = (blocks || []).map(([name, html]) => `<details><summary>${name}</summary>${html}</details>`).join("");
  const on = done.has(id) ? "on" : "";
  return `<article class="card" data-id="${id}">
    <div class="paper-head"><h3>${title}</h3><button class="mark ${on}" data-mark="${id}">${on ? "已能写下" : "标记已能写下"}</button></div>
    <div class="tags">${tagHTML}</div>
    ${body}
    ${detail}
  </article>`;
}

function empty() {
  return `<p class="lead">没有匹配的条目。</p>`;
}

main.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mark]");
  if (!button) return;
  const id = button.dataset.mark;
  if (done.has(id)) done.delete(id);
  else done.add(id);
  localStorage.setItem(storeKey, JSON.stringify([...done]));
  show(current());
});

show("home");
