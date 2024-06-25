import type { Machine, MachinePatchDTO } from "@/interfaces/machine";
import type { Iterable } from "@/interfaces/common";
import request from "@/server/request";

export function listMachines(): Promise<Iterable<Machine>> {
  return request({
    url: "/machine",
    method: "get",
  });
}
export function getMachineById(id: string): Promise<Machine> {
  return request({
    url: `/machine/${id}`,
    method: "get",
  });
}
export function patchMachineById(id: string, dto: MachinePatchDTO): Promise<Machine> {
  return request({
    url: `/machine/${id}`,
    method: "patch",
    data: dto
  });
}
export function deleteMachineById(id: string): Promise<void> {
  return request({
    url: `/machine/${id}`,
    method: "delete",
  });
}
