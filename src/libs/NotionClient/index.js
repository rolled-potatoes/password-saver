import { Client } from '@notionhq/client';
import axios from '../../axios';

class NotionClient {
  constructor(options) {
    this.client = new Client(options);
  }

  getPasswordList() {
    const query = {
      database_id: process.env.REACT_APP_NOTION_DATABASE,
    };

    return this.client.databases.query(query);
  }

  getPasswordItemBySiteNId({ site, id }) {
    if (!site) throw new Error('site 입력 안함');

    const query = {
      database_id: process.env.REACT_APP_NOTION_DATABASE,
      filter: {
        and: [
          {
            property: 'SITE',
            text: {
              equals: site,
            },
          },
          {
            property: 'ID',
            text: {
              equals: id,
            },
          },
        ],
      },
    };
    return this.client.databases.query(query);
  }

  addPasswordListItem({ site, id, password }) {
    return this.client.pages.create({
      parent: {
        database_id: process.env.REACT_APP_NOTION_DATABASE,
      },
      properties: {
        ID: {
          rich_text: [{ text: { content: id } }],
        },
        SITE: {
          title: [{ text: { content: site } }],
        },
        PASSWORD: {
          rich_text: [{ text: { content: password } }],
        },
      },
    });
  }

  removePasswordListItem({ pageId }) {
    return axios.delete(`/notion/${pageId}`);
  }

  updatePasswordListItem({ pageId, site, id, password }) {
    return axios.put(`/notion/${pageId}`,{
      id,site,password
    })
  }
}

const notionClient = new NotionClient({
  auth: process.env.REACT_APP_NOTION_KEY,
});

export default notionClient;
