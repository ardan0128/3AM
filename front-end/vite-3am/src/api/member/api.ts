import axios from 'axios';
import type { MemberResponse } from './types';

export default async function getMembersAll(): Promise<MemberResponse[]> {
  const res = await axios.get<MemberResponse[]>(
    `${import.meta.env.VITE_API_URL}/members`
  );

  return res.data;
}
