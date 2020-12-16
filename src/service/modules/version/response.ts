import { Version } from "."

export type CreateVersionResponse = any
export type DeleteVersionResponse = any
export type ModifyVersionResponse = any
export type PullOffVersionResponse = any
export type PutOnVersionResponse = any
export interface DescribeVersionsResponse {
  totalCount: number
  versions: Version[]
}
export interface DescribeVersionResponse {
  version: Version
}
export type ModifyUserPwdResponse = any
export interface DescribeCosInfoResponse {
  bucket: string
  region: string
  secretID: string
  secretKey: string
  token: string
  expiredTime: string
}

export interface DescribeBusinessesResponse {
  businesses: {
    id: number
    businessTypeID: string
    name: string
    code: string
  }[]
}
