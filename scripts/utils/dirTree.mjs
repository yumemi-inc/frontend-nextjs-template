/** @format */

import path from "path"
import fs from "fs"

const digg = (targetPath, result = []) => {
  const dirState = fs.readdirSync(targetPath)

  // directoryのみを抽出
  const dirList = dirState.filter((val) => fs.statSync(path.join(targetPath, val)).isDirectory())

  // ヒットが0件の場合リザルトを返却
  if (dirList.length === 0) return result

  return dirList
    .map((dir) => digg(path.join(targetPath, dir), [path.join(targetPath, dir)]))
    .reduce((prev, next) => [...prev, ...next], result)
}

export default digg
