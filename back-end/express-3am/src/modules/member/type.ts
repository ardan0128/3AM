export interface Member {
  name: string;
  teamId?: string;
}

export interface CreateMember {
  member: Member;
}

export interface CreateMembers {
  members: Member[];
}

export interface MemberParam {
  id: string;
}

export interface UpdateMemberRequest {
  teamId: string;
}

export interface UpdateMember extends MemberParam, UpdateMemberRequest {}

export interface UpdateMembers {
  members: string[];
  teamId: string;
}

export interface TeamParam {
  teamId: string;
}
