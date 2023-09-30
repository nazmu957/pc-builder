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
import styles from "@/styles/Home.module.css";
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
          <img 
            style={{ width: "4rem",borderRadius: "1.8rem",padding: ".2rem 0rem .2rem 0rem"  }}
            src="https://img.freepik.com/free-vector/creative-computer-logo-template_23-2149213537.jpg?w=1800&t=st=1696074264~exp=1696074864~hmac=ab473acc60e0d4055b9701fbf74245796a360e94b84b057777cd94972f791169"
            alt=""
          />
          
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
              <items>Login</items>
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

      <footer className="footer grid-rows-2 p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
        <div>
          <span className="footer-title">Explore</span>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </div>
        <div>
          <span className="footer-title">Apps</span>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </div>
      </footer>
    </Layout>
  );
};
export default RootLayout;
