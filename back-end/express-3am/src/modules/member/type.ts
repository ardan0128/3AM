export interface Member {
  id: string;
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

export interface MemberThemeRequest {
  mainColor: string;
  shade1: string;
  shade2: string;
  shade3: string;
  shade4: string;
}

export interface MemberTheme extends MemberParam, MemberThemeRequest {}

export interface MemberTheme {
  id: string;
  mainColor: string;
  shade1: string;
  shade2: string;
  shade3: string;
  shade4: string;
}

export interface MemberAndThemeResponse {}
