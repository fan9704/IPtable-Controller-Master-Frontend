import request from "@/server/request";
import type { ExecuteCommandRequestDTO, ExecuteCommandResponseDTO, IptablesCommandResponseDTO, NetworkRecord, NetworkRecordRequestDTO } from "@/interfaces/network";
import type { Iterable } from "@/interfaces/common";

export function listNetworkRecords(): Promise<Iterable<NetworkRecord>> {

  return request({
    url: "/nat/record",
    method: "get",
  });
}
export function getNetworkRecord(id: string): Promise<NetworkRecord> {
  return request({
    url: `/nat/record/${id}`,
    method: "get",
  });
}

export function deleteNetworkRecord(id: string) {
  return request({
    url: `/nat/record/${id}`,
    method: "delete",
  });
}

export function patchNetworkRecord(id: string, data: NetworkRecordRequestDTO): Promise<NetworkRecord> {
  return request({
    url: `/nat/record/${id}`,
    method: "patch",
    data: data
  });
}

export function createNetworkRecord(data: NetworkRecordRequestDTO): Promise<NetworkRecord> {
  return request({
    url: "/nat/record",
    method: "post",
    data: data,
  });
}

export function getIptablesCommand(): Promise<IptablesCommandResponseDTO> {
  return request({
    url: "/nat/iptables",
    method: "get",
  });
}

export function executeCommand(command: ExecuteCommandRequestDTO): Promise<ExecuteCommandResponseDTO> {
  return request({
    url: "/command",
    method: "post",
    data: command
  })
}
