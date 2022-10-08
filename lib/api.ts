import { Click, Link } from "@prisma/client";
import axios, { AxiosResponse } from "axios";

export async function createAnonymousLink(data: { url: string }) {
  const res = await axios.post<any, AxiosResponse<{ link: Link }>>(
    "/api/links/create-anonymously",
    data
  );
  return res.data;
}

export async function createLink(data: { name: string; url: string }) {
  const res = await axios.post<any, AxiosResponse<{ link: Link }>>(
    "/api/links/create",
    data
  );
  return res.data;
}

export async function getAllLinks() {
  const res = await axios.get<
    any,
    AxiosResponse<{ links: (Link & { clicks: Click[] })[] }>
  >("/api/links/session-all");
  return res.data;
}
