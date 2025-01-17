export default function() {
  return [
    {
      title: "My Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Add New Post",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    {
      title: "Patients",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    // {
    //   title: "Symptoms",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/symptoms",
    // },
    {
      title: "My Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "About Us",
      htmlBefore: '<i class="material-icons">question_answer</i>',
      to: "/errors",
    }
  ];
}
