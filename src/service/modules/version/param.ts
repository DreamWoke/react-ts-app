import { TableParams } from "../common"
import { Version } from "."

export type CreateVersionParam = Omit<Version, "id" | "releaseTime" | "url" | "status">
export type DeleteVersionParam = Pick<Version, "id">
export type DescribeVersionParam = Pick<Version, "id">
export type PullOffVersionParam = Pick<Version, "id">
export type PutOnVersionParam = Pick<Version, "id">
export type DescribeVersionsParam = TableParams
export type ModifyVersionParam = Pick<Version, "businesses" | "description" | "id">
