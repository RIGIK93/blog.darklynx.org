// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link
} from "solid-start";
import routes from "~/components/routes.json"
import "./root.css";
import "@picocss/pico/css/pico.css"

interface Post {
  title: string 
  description?:string
}

interface Posts {
  [key: string]: Post;
}

const POSTS: Posts = routes;

export default function Root() {

  let nav = []

  for (const [key, value] of Object.entries(POSTS)) {
    nav.push(
      <li>
        <A class="secondary" href={key}>{value.title}</A>
      </li>
    )
  }

  return (
    <Html lang="en">
      <Head>
        <Title>Blog - darklynx.org</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" type="image/svg" href="/favicon.svg"></Link>
        {/* <Link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"></Link> */}
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <main class="container my-grid">
              <aside class="g-sidebar container">
                <nav class="container">
                  {/* <form>
                    <input id="search" type="search" name="search" placeholder="Search Posts..."></input>
                  </form> */}
                  <ul>
                    {nav}
                  </ul>
                </nav>
              </aside>
              <div class="g-content" role="document">
                <section id="start">
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </section>
                <footer><hr/><a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/3.0/80x15.png"/></a><small> © 2023 <a href="https://github.com/RIGIK93">RIGIK93</a></small></footer>
              </div>
            </main>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
