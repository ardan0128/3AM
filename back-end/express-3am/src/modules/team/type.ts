export interface CreateTeamRequest {
  name: string;
}

export interface TeamParam {
  id: string;
}

export interface UpdateTeamMemberRequest {
  members: string[];
}

export interface UpdateTeamRequest {
  id: string;
  name?: string;
}
