---
to: <% if(locals.path){ %><%= path %>/<%= name %>/index.jsx<%} else { %>src/components/<%= name %>/index.jsx<%} %>
---
export { default } from './<%= name %>';
