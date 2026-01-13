import got, { OptionsInit } from 'got'
import { appConfig } from './config.js'
import crypto from 'crypto'

if (appConfig.accessToken === '') {
  throw new Error('Missing ZEEKR_ACCESS_TOKEN in environment variables')
}

function generateNonce (ts:string): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const getStrWithLength = (length: number) => {
    let str = ''
    for (let i = 0; i < length; i++) {
      str += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return str
  }
  return `${getStrWithLength(3)}-${getStrWithLength(12)}${getStrWithLength(7).toUpperCase()}${ts}`
}

function generateSignature (options:OptionsInit, nonce: string, timestamp: string, bodyMd5B64: string): string {
  const rawStr = `${options.headers?.accept ?? ''}
x-api-signature-nonce:${nonce}
x-api-signature-version:1.0

${options.searchParams ?? ''}
${bodyMd5B64}
${timestamp}
${options.method?.toUpperCase() ?? 'GET'}
${new URL(options.url ?? '')?.pathname ?? ''}`
  return crypto.createHmac('sha1', appConfig.appKey).update(rawStr).digest('base64')
}

export const zeekrGotInstance = got.extend({
  prefixUrl: 'https://api.zeekrline.com',
  timeout: {
    request: 10000,
  },
  headers: {
    Accept: 'application/json;responseformat=3',
    'Content-Type': 'application/json; charset=UTF-8',
    Connection: 'Keep-Alive',
    host: 'api.zeekrline.com',
    'X-OPERATOR-CODE': 'ZEEKR',
    'X-APP-ID': 'ZEEKRAPP',
    'User-Agent': 'okhttp/4.9.3',
    'x-api-signature-version': '1.0',
    authorization: appConfig.accessToken,
  },
  hooks: {
    beforeRequest: [
      (options) => {
        const ts = Date.now().toString()
        const nonce = generateNonce(ts)
        const bodyStringMd5B64 = crypto
          .createHash('md5')
          .update(options.body ? JSON.stringify(options.body) : '')
          .digest('base64')
        const signature = generateSignature(options, nonce, ts, bodyStringMd5B64)

        options.headers = {
          ...options.headers,
          'x-api-signature-nonce': nonce,
          'x-signature': signature,
          'x-timestamp': ts,
        }
      }
    ]
  }
})
