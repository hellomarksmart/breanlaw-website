import * as React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const headings = [
    {
      text_404: "404",
      heading: "Page not found",
      subheading: "Please check the URL in the address bar and try again.",
      button_text: "Go back home",
    },
  ]

  return (
    <Layout>
      <Seo title="404: Not found" />
      <>

          <div className="max-w-max mx-auto">
            <div className="sm:flex">
              {headings.map(item => (
                <>

                    {item.text_404}
                  </p>
                  <div className="sm:ml-6">
                    <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                        {item.heading}
                      </h1>

                        {item.subheading}
                      </p>
                    </div>
                    <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                      <Link
                        to="/"

                      >
                        {item.button_text}
                      </Link>
                    </div>
                  </div>
                </>
              ))}

          </div>
        </div>
      </>
    </Layout>
  )
}

export default NotFoundPage
