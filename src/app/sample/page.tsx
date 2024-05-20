import Link from "next/link";

interface Props {
  searchParams: {
    success: string;
  };
}

export default function Page(props: Props) {
  return (
    <div>
      <p>
        <Link href="/sample/new" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">New form(Parallel Routes)</Link>
      </p>
      {props.searchParams.success === "true" && <p>Success!</p>}
    </div>
  );
}
