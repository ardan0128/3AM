export interface MemberDto {
  name: string;
  teamId?: string;
}

export interface CreateMemberOneDto {
  member: MemberDto;
}

export interface CreateMemberAllDto {
  member: MemberDto[];
}
