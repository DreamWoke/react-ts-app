import { RequestDefine } from ".."
import { TableParams } from "../common"
import {
  CreateVersionParam,
  DeleteVersionParam,
  DescribeVersionParam,
  DescribeVersionsParam,
  ModifyVersionParam,
  PullOffVersionParam,
  PutOnVersionParam,
} from "./param"
import {
  DescribeVersionsResponse,
  ModifyVersionResponse,
  DeleteVersionResponse,
  DescribeVersionResponse,
  PullOffVersionResponse,
  PutOnVersionResponse,
  DescribeCosInfoResponse,
  DescribeBusinessesResponse,
  CreateVersionResponse,
} from "./response"

export interface Version {
  businesses: { bid: string; enable: boolean; name: string }[]
  description: string
  fid: string
  force: boolean
  silent: boolean
  version: string
  releaseTime: string
  id: number
  url: string
  packageName: string
  /**
   * 商家状态
   *
   * @type {(1 | 2)}
   * @description 1:已上架 2:未上架
   * @memberof Version
   */
  status: 1 | 2
}

interface VersionRequestMap {
  modifyVersion: RequestDefine<ModifyVersionParam, ModifyVersionResponse>
  describeVersions: RequestDefine<DescribeVersionsParam, DescribeVersionsResponse>
  describeVersion: RequestDefine<DescribeVersionParam, DescribeVersionResponse>
  deleteVersion: RequestDefine<DeleteVersionParam, DeleteVersionResponse>
  uploadInstallPackage: RequestDefine<FormData, any>
  describeBusinesses: RequestDefine<TableParams, DescribeBusinessesResponse>
  pullOffVersion: RequestDefine<PullOffVersionParam, PullOffVersionResponse>
  putOnVersion: RequestDefine<PutOnVersionParam, PutOnVersionResponse>
  describeCosInfo: RequestDefine<any, DescribeCosInfoResponse>
  createVersion: RequestDefine<CreateVersionParam, CreateVersionResponse>
}

export default VersionRequestMap
