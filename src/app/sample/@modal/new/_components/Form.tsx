"use client";

import { SubmitButton } from "@/app/sample/@modal/new/_components/SubmitButton";
import {
  postForm,
} from "@/app/sample/@modal/new/_commands/postForm";

export function Form() {
  return (
    <form action={postForm}>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
}
