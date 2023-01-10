/** @format */
import "zx/globals"
import prompts from "prompts"
import path from "path"

const TARGET_DIR = "./src/pages"

const START = `1. 生成タイプの選択 (SSR/SSG/ISR)
2. 生成パスの入力 [hoge]/fuga
3. コンポーネント名の入力 example
`
const CONTENTS = [
  {
    type: "select",
    name: "type",
    message: "種類の選択",
    choices: [
      { value: "ssr", title: "SSR [Server Side Rendering] サーバ側でのレンダリング" },
      { value: "isr", title: "ISR [Incremental Static Regeneration] 定期的な静的再生成" },
      { value: "ssg", title: "SSG [Static Site Generation] 静的サイト生成" },
      { value: "api", title: "API [Application Programming Interface] JSON等の純粋なAPIの作成" },
    ],
  },
  {
    type: "text",
    name: "targetPath",
    message: `パスの指定 ${TARGET_DIR}`,
    format: (targetPath) => path.join(TARGET_DIR, targetPath || ""),
  },
  {
    type: "text",
    name: "name",
    message: "コンポーネント名の指定",
    validate: (value) =>
      value == null || value === "" ? "コンポーネントの名前を入力してください" : true,
  },
]

const onCancel = () => {
  console.log("キャンセルされました")
  process.exit(1)
}

console.log(START)
const { targetPath, type, name } = await prompts(CONTENTS, { onCancel })
await $`npx generate-react-cli component --type=${type} --path=${targetPath} ${name}`
