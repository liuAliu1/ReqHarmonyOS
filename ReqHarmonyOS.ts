# ReqHarmonyOS

import http from '@ohos.net.http'

const host = 'your host'

function SendReqGet(path: string,extraData?: string | Object | ArrayBuffer, callBack?: Function) {
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
