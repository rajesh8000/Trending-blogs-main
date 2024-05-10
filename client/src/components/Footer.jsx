import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsLinkedin,
} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500 bg-sky-50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-around sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 rounded-lg rounded-lg text-white">
                Trending
              </span>
              Blogs
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trending Blogs
                </Footer.Link>
                <Footer.Link
                  href="/search"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Posts
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Connect" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-around">
          <div>
            {' '}
            Kathmandu Metro {new Date().getFullYear()} Created by Thapa Co.
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 ">
            <Footer.Icon href="https://www.facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://github.com/rajesh8000" icon={BsGithub} />
            <Footer.Icon href="https://www.linkedin.com" icon={BsLinkedin} />
            <Footer.Icon href="https://www.instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://www.twitter.com" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
