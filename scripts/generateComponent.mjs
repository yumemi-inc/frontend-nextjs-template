/** @format */
import "zx/globals"
import prompts from "prompts"
import path from "path"
import digg from "./utils/dirTree.mjs"
import capitalize from "./utils/capitalize.mjs"

const TARGET_DIR = "./src/components"
const currentDir = process.cwd()
const targetDir = path.resolve(currentDir, TARGET_DIR)
const dirList = digg(targetDir).map((val) => val.replace(targetDir, ""))

const START = `1. 生成パスの指定
2. コンポーネント名の入力
3. 生成ファイルの選択
`
const CONTENTS = [
  {
    type: "autocomplete",
    name: "targetPath",
    message: `パスの指定 ${TARGET_DIR}`,
    format: (targetPath) => path.join(TARGET_DIR, targetPath || ""),
    choices: [...dirList.map((val) => ({ title: val })), { title: "/" }],
  },
  {
    type: "text",
    name: "name",
    message: "コンポーネント名の指定",
    format: capitalize,
    validate: (value) =>
      value == null || value === "" ? "コンポーネントの名前を入力してください" : true,
  },
  {
    type: "multiselect",
    name: "withType",
    message: "作成するファイル",
    choices: [
      { title: "unit test", value: "--withTest=true" },
      { title: "lazy component", value: "--withLazy=true" },
      { title: "storybook", value: "--withStory=true" },
      { title: "hooks", value: "--withHooks=true" },
      { title: "hooks unit test", value: "--withHooksTest=true" },
    ],
  },
]

const onCancel = () => {
  console.log("キャンセルされました")
  process.exit(1)
}

console.log(START)
const { targetPath, name, withType } = await prompts(CONTENTS, { onCancel })
await $`npx generate-react-cli component --type=component --path=${targetPath} ${withType} ${name}`
