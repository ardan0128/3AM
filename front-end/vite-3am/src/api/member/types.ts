export interface MemberResponse {
  id: string;
  name: string;
  chzzkId?: string;
  youtubeHandle?: string;
  naverCafe?: string;
  xId?: string;
  profileImageUrl?: string;
}

export interface ThemeResponse {
  id: string;
  mainColor?: string;
  subColor?: string;
  shade1?: string;
  shade2?: string;
  shade3?: string;
  shade4?: string;
  cardBackColor?: string;
}

export interface MemberWithThemeResponse extends MemberResponse {
  theme: ThemeResponse;
}
