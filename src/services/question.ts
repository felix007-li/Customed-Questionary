import axios, { ResDataType } from './ajax'

// get sigle questionary info
export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as ResDataType
  return data
}

// create questonary
export async function createQuestionService(): Promise<ResDataType> {
  const url = '/api/question'
  const data = (await axios.post(url)) as ResDataType
  return data
}

// get question list
export async function getQuestionListService(opt: any = {}): Promise<ResDataType> {
  const url = '/api/question'
  const data = (await axios.get(url, { params: opt })) as ResDataType
  return data
}
// export async function getQuestionListService(
//   opt: Partial<SearchOption> = {}
// ): Promise<ResDataType> {
//   const url = '/api/question'
//   const data = (await axios.get(url, { params: opt })) as ResDataType
//   return data
// }
