"use server";

import { redirect } from "next/navigation";

export async function postForm(formData: FormData) {
  redirect("/sample?success=true");
}
