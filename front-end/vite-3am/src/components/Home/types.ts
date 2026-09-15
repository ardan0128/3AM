export interface MemberProps {
  id: string;
  name: string;
  chzzkId?: string;
  youtubeHandle?: string;
  naverCafe?: string;
  xId?: string;
  profileImageUrl?: string;
  theme: Theme;
}

export interface Theme {
  mainColor: string;
  subColor?: string;
  shade1?: string;
  shade2?: string;
  shade3?: string;
  shade4?: string;
}

export interface CardButtonProps {
  buttonName: string;
  buttonLink: string;
  target: string;
  mainColor: string;
  subColor?: string;
  shade1?: string;
  shade2?: string;
  shade3?: string;
  shade4?: string;
}
