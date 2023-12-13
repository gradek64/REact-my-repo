/* eslint-disable @typescript-eslint/no-explicit-any */
import req from 'superagent'

// We handle these errors in check response function
const catchError = (res: req.Response): boolean => res.status < 500

export const request = {
  get: (url: string) => req.get(url).type('json').ok(catchError),
  post: (url: string, data: any) => req.post(url, data).type('json').ok(catchError),
  patch: (url: string, data: any) => req.patch(url, data).type('json').ok(catchError),
  put: (url: string, data: any) => req.put(url, data).type('json').ok(catchError),
  delete: (url: string, data: any) => req.delete(url, data).type('json').ok(catchError),
}
