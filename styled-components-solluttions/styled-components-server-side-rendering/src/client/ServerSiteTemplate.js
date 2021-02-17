/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */
const Html = ({
  ComponentAppContent: body,
  stylesofComponentApp: styles,
  title
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div>this div has been rendered on the server site !!</div>
      <div >
      <h1>This header is rendered on the server site below is react content
      <div id="app" style="border:1px dotted green">${body}</div>
      </div>
      </body>
  </html>
`;

export default Html;
