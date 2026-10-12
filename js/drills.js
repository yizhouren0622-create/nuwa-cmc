window.DRILLS = [
  {
    id: "d-limit",
    title: "极限与泰勒",
    problems: [
      {
        id: "d1",
        title: "定阶",
        stem: "求 \\(\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-x}{x-\\sin x}\\)。",
        hint: "分子、分母都展到 \\(x^3\\)。",
        points: "\\(\\tan x=x+\\dfrac13 x^3+o(x^3)\\)，\\(\\sin x=x-\\dfrac16 x^3+o(x^3)\\)。",
        traps: "只展到 \\(x\\) 会得到 \\(0/0\\) 的空式。",
        answer: "\\(2\\)。",
        solution: "分子 \\(\\dfrac13 x^3\\)，分母 \\(\\dfrac16 x^3\\)，比值趋于 2。"
      },
      {
        id: "d2",
        title: "积分上限",
        stem: "求 \\(\\lim\\limits_{x\\to 0}\\dfrac{1}{x^4}\\int_0^{x^2}\\ln(1+t)\\,dt\\)。",
        hint: "\\(\\ln(1+t)\\sim t\\)，积分约是上限的平方的一半。",
        points: "令上限为 \\(u=x^2\\)，积分 \\(\\sim u^2/2\\)。",
        traps: "不要把上限 \\(x^2\\) 当成 \\(x\\)。",
        answer: "\\(\\dfrac12\\)。",
        solution: "\\(\\int_0^{u}\\ln(1+t)dt\\sim\\int_0^u t\\,dt=u^2/2\\)，\\(u=x^2\\)，故 \\(u^2/(2x^4)=1/2\\)。"
      }
    ]
  },
  {
    id: "d-ode",
    title: "微分方程",
    problems: [
      {
        id: "d3",
        title: "一阶线性",
        stem: "求 \\(y'+\\dfrac{2}{x}y=x\\) 在 \\(x>0\\) 的通解。",
        hint: "积分因子 \\(x^2\\)。",
        points: "\\((x^2 y)'=x^3\\)。",
        traps: "常数不要写成 \\(Cx\\)，积分之后是 \\(C/x^2\\)。",
        answer: "\\(y=\\dfrac{x^2}{4}+\\dfrac{C}{x^2}\\)。",
        solution: "两边乘 \\(x^2\\)：\\((x^2 y)'=x^3\\)，积分得 \\(x^2 y=x^4/4+C\\)。"
      },
      {
        id: "d4",
        title: "伯努利",
        stem: "求 \\(y'-y=y^2\\) 的通解。",
        hint: "令 \\(z=y^{-1}\\)。",
        points: "得到 \\(z'+z=-1\\)。",
        traps: "\\(y=0\\) 是奇解，通解之外要提一句。",
        answer: "\\(y=0\\)，或 \\(\\dfrac{1}{y}=Ce^{-x}-1\\)。",
        solution: "\\(y\\ne 0\\) 时 \\(z=1/y\\)，\\(z'+z=-1\\)，\\(z=Ce^{-x}-1\\)。"
      }
    ]
  },
  {
    id: "d-geom",
    title: "直线与平面",
    problems: [
      {
        id: "d5",
        title: "投影",
        stem: "求直线 \\(\\dfrac{x}{1}=\\dfrac{y-1}{2}=\\dfrac{z}{-1}\\) 在平面 \\(x+y+z=1\\) 上的投影直线的一个方向向量。",
        hint: "先写直线的一般式，再取平面束，使法向量与 \\((1,1,1)\\) 垂直。",
        points: "直线方向 \\((1,2,-1)\\)。投影方向同时垂直于 \\((1,1,1)\\) 和另一张过直线的平面的法向量。",
        traps: "投影直线的方向不是原方向在平面上的随意投影公式用错符号。",
        answer: "例如 \\((1,-1,0)\\)。原方向在平面上的投影为 \\((1,2,-1)-\\dfrac{2}{3}(1,1,1)=\\left(\\dfrac13,\\dfrac43,-\\dfrac53\\right)\\)，可取 \\((1,4,-5)\\)。",
        solution: "方向 \\(\\mathbf v=(1,2,-1)\\)，法向量 \\(\\mathbf n=(1,1,1)\\)，\\(\\mathbf v\\cdot\\mathbf n=2\\)。投影向量 \\(\\mathbf v-\\dfrac{2}{3}\\mathbf n=\\left(\\dfrac13,\\dfrac43,-\\dfrac53\\right)\\)，即 \\((1,4,-5)\\)。"
      }
    ]
  },
  {
    id: "d-int",
    title: "格林与高斯",
    problems: [
      {
        id: "d6",
        title: "挖奇点",
        stem: "计算 \\(\\displaystyle\\oint_L\\dfrac{-y}{x^2+y^2}dx+\\dfrac{x}{x^2+y^2}dy\\)，\\(L\\) 为 \\(x^2+y^2=4\\) 逆时针。",
        hint: "这就是绕原点一周的标准场，不要在含原点的圆盘上直接用格林。",
        points: "在单位圆上参数化，或用已知结果 \\(2\\pi\\)。",
        traps: "区域内部不光滑，格林不能直接套整圆盘。",
        answer: "\\(2\\pi\\)。",
        solution: "令 \\(x=2\\cos\\theta\\)，\\(y=2\\sin\\theta\\)，被积式化为 \\(d\\theta\\)，从 \\(0\\) 到 \\(2\\pi\\)。"
      },
      {
        id: "d7",
        title: "补面",
        stem: "\\(S\\) 为 \\(z=\\sqrt{1-x^2-y^2}\\) 的上侧，求 \\(\\displaystyle\\iint_S x\\,dydz+y\\,dzdx+z\\,dxdy\\)。",
        hint: "补底面 \\(z=0\\)，散度是 3。半球体积是 \\(2\\pi/3\\)。底面 \\(z=0\\) 上第三分量为 0。",
        points: "封闭曲面外侧积分等于 \\(3\\times\\dfrac{2\\pi}{3}=2\\pi\\)，底面贡献 0。",
        traps: "上侧半球加底面向下，才是外侧。",
        answer: "\\(2\\pi\\)。",
        solution: "\\(\\iiint 3\\,dV=3\\cdot\\dfrac{2\\pi}{3}=2\\pi\\)，底面 \\(z=0\\) 时 \\(z\\,dxdy=0\\)。"
      }
    ]
  },
  {
    id: "d-series",
    title: "级数",
    problems: [
      {
        id: "d8",
        title: "端点",
        stem: "求 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{x^n}{n\\cdot 2^n}\\) 的收敛域。",
        hint: "这是 \\(-\\ln(1-x/2)\\) 在 \\(|x|<2\\) 内。端点 \\(x=\\pm 2\\) 分别是调和级数和交错调和级数。",
        points: "半径 2。\\(x=2\\) 发散，\\(x=-2\\) 收敛。",
        traps: "收敛域是半开区间，不要写成闭区间。",
        answer: "\\([-2,2)\\)。",
        solution: "比值 \\(|a_{n+1}/a_n|\\to|x|/2\\)。\\(x=2\\) 为调和级数，\\(x=-2\\) 为 \\((-1)^n/n\\)。"
      },
      {
        id: "d9",
        title: "分段符号",
        stem: "判断 \\(\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(-1)^{[\\sqrt n]}}{n}\\) 是否收敛。",
        hint: "按 \\(m^2\\le n<(m+1)^2\\) 把同号项加成 \\(C_m\\)，再看 \\(C_m\\) 是否递减到 0。",
        points: "\\(C_m\\sim\\ln\\big(1+1/m\\big)\\sim 1/m\\)，交错后收敛。",
        traps: "不是绝对收敛。不能用莱布尼茨直接套在 \\(1/n\\) 上，因为符号不是逐项交替。",
        answer: "条件收敛。",
        solution: "同号块的和 \\(C_m=\\sum_{n=m^2}^{(m+1)^2-1}1/n\\) 单调趋于 0，\\(\\sum(-1)^m C_m\\) 收敛。绝对级数是调和级数，发散。"
      }
    ]
  },
  {
    id: "d-proof",
    title: "不等式起笔",
    problems: [
      {
        id: "d10",
        title: "辅助函数",
        stem: "设 \\(f\\) 在 \\([0,1]\\) 连续，在 \\((0,1)\\) 可导，\\(f(0)=0\\)，\\(f(1)=1\\)。证明存在 \\(\\xi\\in(0,1)\\) 使 \\(f'(\\xi)=2\\xi\\)。",
        hint: "看 \\(f(x)-x^2\\)。",
        points: "这个函数在两端为 0，罗尔给出导数零点。",
        traps: "不要对 \\(f\\) 本身用拉格朗日就结束，那样只能得到 \\(f'=1\\)。",
        answer: "存在这样的 \\(\\xi\\)。",
        solution: "令 \\(g(x)=f(x)-x^2\\)。\\(g(0)=g(1)=0\\)，存在 \\(\\xi\\) 使 \\(g'(\\xi)=0\\)，即 \\(f'(\\xi)=2\\xi\\)。"
      }
    ]
  }
];
