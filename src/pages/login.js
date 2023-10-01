import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-builder-nazmu957.vercel.app/",
              })
            }
          />
        </div>
        <h3>LOGIN WITH GOOGLE</h3>
        <p>Click the icon</p>
      </div>
    </div>
  );
};

export default LoginPage;
