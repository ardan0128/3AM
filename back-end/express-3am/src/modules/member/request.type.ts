export interface CreateMemberRequest {
  name: string;
  chzzkId?: string;
  youtubeHandle?: string;
  naverCafe?: string;
  xId?: string;
  profileImageUrl?: string;
}

export interface CreateMembersRequest {
  members: CreateMemberRequest[];
}

export interface UpdateMemberRequest {
  id: string;
  chzzkId?: string;
  youtubeHandle?: string;
  naverCafe?: string;
  xId?: string;
  profileImageUrl?: string;
}

export interface UpdateMembersRequest {
  members: UpdateMemberRequest[];
}

export interface CreateThemeRequest {
  mainColor: string;
  shade1?: string;
  shade2?: string;
  shade3?: string;
  shade4?: string;
  cardBackColor?: string;
}
