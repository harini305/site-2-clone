import AuthForms from "@/components/account/AuthForms";
import styles from "../simple-page.module.css";

export const metadata = {
  title: "My Account",
  description: "Sign in or create an account.",
  robots: { index: false },
};

export default function AccountPage() {
  return (
    <div className={`container page-top ${styles.page}`}>
      <AuthForms />
    </div>
  );
}
