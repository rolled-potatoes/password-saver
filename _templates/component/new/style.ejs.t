---
to: <% if(locals.path){ %> <%= path %>/<%= name %>/style.js <%} else { %>src/components/<%= name %>/style.js<%} %>
---
import styled from 'styled-components';

export const <%= name %> = styled.div`
  
`;

