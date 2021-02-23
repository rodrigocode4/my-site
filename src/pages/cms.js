import React, { Suspense, lazy } from "react"

const config = {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "rodrigocode4/my-site",
    branch: "cms"
  },
  publish_mode: "editorial_workflow",
  media_folder: "static/assets/img",
  public_folder: "assets/img",
  collections: [
    {
      label: "Posts",
      name: "posts",
      folder: "posts",
      create: false,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Description", name: "description", widget: "string" },
        {
          label: "Date",
          name: "date",
          widget: "datetime",
          format: "DD-MM-YYYY hh:mm:ss"
        },
        { label: "Image", name: "thumbnail", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" }
      ]
    }
  ]
}

const CMS = lazy(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config })
    }),
  { ssr: false }
)

const Rodrigo = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <CMS />
  </Suspense>
)

export default Rodrigo
