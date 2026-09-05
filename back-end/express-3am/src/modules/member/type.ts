export interface Member {
  name: string;
  teamId?: string;
  mainColor?: string;
  subColor?: string;
  chzzkId?: string;
  youtubeHandle?: string;
  naverCafe?: string;
  xId?: string;
  profileImageUrl?: string;
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
  id: string;
  teamId?: string;
  mainColor?: string;
  subColor?: string;
  chzzkId?: string;
  youtubeHandle?: string;
  naverCafe?: string;
  xId?: string;
  profileImageUrl?: string;
}

export interface UpdateMembersRequest {
  members: UpdateMemberRequest[];
}

export interface TeamParam {
  teamId: string;
}
