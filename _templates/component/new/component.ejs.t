---
to: <% if(locals.path){ %><%= path %>/<%= name %>/<%= name %>.jsx<%} else { %>src/components/<%= name %>/<%= name %>.jsx<%} %>
---
import React from 'react';
import * as styles from './style';

const <%= name %> = (props) =>{
  return (
      <styles.<%= name %>>
      </styles.<%= name %>>
  )
};

export default <%= name %>;
