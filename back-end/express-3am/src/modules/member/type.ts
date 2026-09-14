export interface Member {
  id: string;
  name: string;
  chzzkId?: string;
  youtubeHandle?: string;
  naverCafe?: string;
  xId?: string;
  profileImageUrl?: string;
}

export interface MemberParam {
  id: string;
}

export interface TeamParam {
  teamId: string;
}

export interface MemberTheme {
  id: string;
  mainColor: string;
  shade1?: string;
  shade2?: string;
  shade3?: string;
  shade4?: string;
}
