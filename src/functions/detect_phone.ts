import { headers } from "next/headers";

export default function getMobile() {
 
  const userAgent = headers().get("user-agent") || "";
  return isMobile(userAgent);
}

// utils/isMobile.ts
export const isMobile = (userAgent: string): boolean => {
    return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
  };
  