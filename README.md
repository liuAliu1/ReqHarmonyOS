
---

# ReqHarmonyOS

一个基于 [HarmonyOS](https://developer.harmonyos.com/) 的 GET 请求封装工具，基于 `@ohos.net.http` 模块，适用于 ArkTS 项目，简化网络请求调用流程。

## 📦 功能简介

* 简洁封装 HarmonyOS 的 `http.request`
* 支持传入额外数据 `extraData`
* 支持回调函数处理请求结果
* 默认返回数据类型为 `OBJECT`
* 支持自定义请求路径

## 🔧 使用方式

### 1. 安装依赖

确保你已在 `module.json5` 中启用了 `@ohos.net.http` 模块。

```json5
 "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET",
        "usedScene": {
          "when": "always"
        }
      }
    ]
```

### 2. 使用示例

```ts
SendReqGet("your path", (data:object) => {})
```

## 🧩 方法说明

```ts
function SendReqGet(
  path: string,
  extraData?: string | Object | ArrayBuffer,
  callBack?: Function
)
```

| 参数          | 类型                                | 说明                  |
| ----------- | --------------------------------- | ------------------- |
| `path`      | `string`                          | 请求路径（会拼接在 `host` 后） |
| `extraData` | `string \| Object \| ArrayBuffer` | 可选，请求参数             |
| `callBack`  | `Function`                        | 可选，请求成功后的回调函数       |

## 📁 示例代码

```ts
import http from '@ohos.net.http'

const host = 'your host'

function SendReqGet(path: string, extraData?: string | Object | ArrayBuffer, callBack?: Function) {
  const httpRequest = http.createHttp()
  httpRequest.request(host + path, {
    method: http.RequestMethod.GET,
    extraData: extraData,
    expectDataType: http.HttpDataType.OBJECT,
    header: {
      'Content-Type': 'application/json',
    }
  }, (err, data) => {
    if (err) {
      console.log('SendReqGet err: ' + err.message)
      return
    }
    let msg = data.result
    console.log('SendReqGet data: ' + msg)
    if (callBack) {
      callBack(msg)
    }
  })
}
```

## 📌 注意事项

* 使用前请设置正确的 `host` 地址。
* 当前封装仅支持 GET 请求，如需 POST/PUT/DELETE 可扩展封装。
* 具体参数如token等请按需添加

