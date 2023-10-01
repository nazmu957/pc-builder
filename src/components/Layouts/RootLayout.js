import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/RootLayout.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";



const RootLayout = ({ children }) => {

  const { data: session } = useSession();

  console.log(session)
  return (
    <Layout>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href={"/"}>
            <img
              style={{
                width: "4rem",
                borderRadius: "1.8rem",
                padding: ".2rem 0rem .2rem 0rem",
              }}
              src="https://img.freepik.com/free-vector/creative-computer-logo-template_23-2149213537.jpg?w=1800&t=st=1696074264~exp=1696074864~hmac=ab473acc60e0d4055b9701fbf74245796a360e94b84b057777cd94972f791169"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Link className="btn   text-xl" href={"/pc_builder"}>
            <Button style={{ backgroundColor: "skyblue" }} type="primary">
              {" "}
              PC-Builder
            </Button>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <Link
              className="btn"
              key={category.id}
              href={`/categories/${category?.id}`}
            >
              {category.category}{" "}
            </Link> */}

            <li style={{ marginRight: "5rem" }} tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul style={{ width: "10rem", zIndex: "1000" }} className="p-2">
                  <li>
                    <Link href={"/categories/1"}>CPU/Processor</Link>
                  </li>
                  <li>
                    <Link href={"/categories/2"}>Motherboard</Link>
                  </li>
                  <li>
                    <Link href={"/categories/3"}>RAM</Link>
                  </li>
                  <li>
                    <Link href={"/categories/4"}>Power Supply Unit</Link>
                  </li>
                  <li>
                    <Link href={"/categories/5"}>Storage Device</Link>
                  </li>
                  <li>
                    <Link href={"/categories/6"}>Monitor</Link>
                  </li>
                  <li>
                    <Link href={"/categories/7"}>Others</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/profile"
          ></Link>
          {session?.user ? (
            <items>
              <Button onClick={() => signOut()} type="primary" danger>
                Logout
              </Button>
            </items>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items><Button className="btn">Login</Button></items>
            </Link>
          )}
        </div>
      </div>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <footer
        style={{ padding: "5rem" }}
        className="footer p-10 bg-base-200 text-base-content"
      >
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </Layout>
  );
};
export default RootLayout;
