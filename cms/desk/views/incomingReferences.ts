import DocumentsPane from 'sanity-plugin-documents-pane';

export const incomingReferences = (S) =>
  {
    return S.view.component(DocumentsPane).title('Incoming References')
      .options({
        query: `*[!(_id in path("drafts.**")) && references($id)]`,
        params: { id: `_id` },
      });
  };

