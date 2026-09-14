import axios from 'axios';
import type { MemberWithThemeResponse } from './types';

export default async function getMembersAll(): Promise<
  MemberWithThemeResponse[]
> {
  const res = await axios.get<MemberWithThemeResponse[]>(
    `${import.meta.env.VITE_API_URL}/members`
  );

  return res.data;
}
