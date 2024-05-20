import { useFormStatus } from "react-dom";

export function SubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      disabled={pending || props.disabled}
      name="intent"
      value="submit"
      className="rounded border bg-gray-50 px-3 py-2 text-sm"
    >
      {pending ? "Loading..." : props.children}
    </button>
  );
}
