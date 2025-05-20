"use server";
import { API } from "@/lib/constants";

export async function api_connection() {
  try {
    const response = await fetch(new URL("", API));

    if (response.ok === false) {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
