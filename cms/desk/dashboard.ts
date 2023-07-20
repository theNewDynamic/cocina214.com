import { dashboardTool } from "@sanity/dashboard";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";


export const dashboard =  dashboardTool({
  name: "dashboard",
  widgets: [
    documentListWidget({
      layout: { width: "small" },
      title: 'Recent Drafts',
      query: '*[(_id in path("drafts.**")) && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*14]'
    }),
    documentListWidget({
      layout: { width: "small" },
      title: 'Recently Edited',
      order: '_updatedAt desc',
      limit: 5
    }),
    documentListWidget({
      title: 'Recent Posts',
      types: ['post'],
      order: 'publishedAt desc',
      limit: 5,
      createButtonText: 'Create new Blog Post',
      showCreateButton: true
    }),
    documentListWidget({
      layout: { width: "small" },
      title: 'Future Dated Books',
      query: '*[_type == "book" && publishedAt > now()]'
    }),
  ]
})