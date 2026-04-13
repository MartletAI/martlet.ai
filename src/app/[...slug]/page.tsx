import { redirect } from "next/navigation";

export default function UnknownPathRedirect() {
  redirect("/");
}
