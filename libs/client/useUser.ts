import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
    console.log(router.pathname);
    if (data && data.ok && router.pathname === "/enter") {
      router.replace("/profile");
    }
  }, [data, router]);
  return { user: data?.profile, isLoading: !data && !error };
}
