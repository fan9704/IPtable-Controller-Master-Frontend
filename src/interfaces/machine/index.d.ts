interface Machine {
  id: string;
  hostIp: string;
  backendUrl: string;
  frontendUrl: string;
  note: string;
}
interface MachinePatchDTO {
  hostIp: string;
  backendUrl: string;
  frontendUrl: string;
  note: string;
}

export type { Machine, MachinePatchDTO }
